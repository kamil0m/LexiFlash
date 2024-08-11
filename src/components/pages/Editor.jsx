import {addTestFlashcard, addFlashcard, getFlashcards, removeFlashcard, editFlashcard} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useState, useEffect} from "react";
import {Card, Row, Table, Modal} from "react-bootstrap";
import ListFlashcards from "../flashcard/ListFlashcards.jsx";
import NewFlashcardButton from "../AddNewFlashcard/NewFlashcardButton.jsx";


export default function Editor() {
    const [flashcards, setFlashcards] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const client = useSupabase();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (null === client) {
            return
        }

        loadFlashcards()
    }, [client]);

    const loadFlashcards = async () => {
        const {data} = await getFlashcards(client);
        setFlashcards(data);
    }

    // function handleAdd(newFlashcard){
    //     console.log("handleAdd activated")
    //     addFlashcard(client, newFlashcard);
    //     setFlashcards(prevState => [...prevState, newFlashcard]);
    // }

    async function handleAddTest(){
        await addTestFlashcard(client);
        location.reload()
    }

    // const handleRemove = (event) => {
    //     if (undefined === event.target.parentNode.parentNode.id) {
    //         return
    //     }
    //     const id = event.target.parentNode.parentNode.id
    //     removeFlashcard(client, id);
    //     setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id != id))
    // }

    const handleEdit = (editedFlashcard) => {
        // console.log(e.target);
        editFlashcard(client, editedFlashcard)
        setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id !== editedFlashcard.id))
        setFlashcards((prevState) => [...prevState, editedFlashcard]);
    }

    const handleAction = (e, newFlashcard) => {
        const action = e.target.closest('[data-action]').dataset.action;
        console.log(action);
        switch (action) {
            case "remove":
                if (undefined === event.target.parentNode.parentNode.id) {
                    return
                }
                const id = event.target.closest('[id]').id;
                removeFlashcard(client, id);
                setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id != id));
                break;
            case "add" :
                console.log("add case activated");
                addFlashcard(client, newFlashcard);
                setFlashcards(prevState => [...prevState, newFlashcard]);
                break;
            
        }
    }

    return (
        <>
            <Card>
                <Card.Header>
                    <Row className="justify-content-between align-items-center">
                        <h4 className="col-6 mb-0">Flashcards list</h4>
                        <button onClick={handleAddTest}>Test</button>
                        <NewFlashcardButton handleAdd={handleAction}/>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover className="mb-0">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>English</th>
                            <th>French</th>
                            <th>{windowWidth < 650 ? 'Pr.' : 'Progress'}</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <ListFlashcards flashcards={flashcards} handleAction={handleAction} handleEdit={handleEdit} />
                        {/* <ListFlashcards flashcards={flashcards} handleRemove={handleRemove} handleEdit={handleEdit}/> */}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}