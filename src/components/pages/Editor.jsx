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


    const handleAction = (e, newFlashcard) => {
        const action = e.target.closest('[data-action]').dataset.action;
        switch (action) {
            case "remove":
                const id = event.target.closest('[id]').id;
                removeFlashcard(client, id);
                setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id != id));
                break;
            case "add" :
                addFlashcard(client, newFlashcard);
                setFlashcards(prevState => [...prevState, newFlashcard]);
                break;
            case "edit" :
                editFlashcard(client, newFlashcard)
                setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id !== newFlashcard.id))
                setFlashcards((prevState) => [...prevState, newFlashcard]);
                break;
        }
    }

    return (
        <>
            <Card>
                <Card.Header>
                    <Row className="justify-content-between align-items-center">
                        <h4 className="col-6 mb-0">Flashcards list</h4>
                        {/* <button onClick={handleAddTest}>Add a test flashcard</button> */}
                        <NewFlashcardButton handleAction={handleAction}/>
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
                        <ListFlashcards flashcards={flashcards} handleAction={handleAction} />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}