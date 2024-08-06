import {addFlashcard, getFlashcards, removeFlashcard, editFlashcard} from "../../repository/flashcardMethods.js";
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

    function handleAdd(newFlashcard){
        addFlashcard(client, newFlashcard);
        setFlashcards(prevState => [...prevState, newFlashcard]);
    }

    const handleRemove = (event) => {
        if (undefined === event.target.parentNode.parentNode.id) {
            return
        }
        const id = event.target.parentNode.parentNode.id
        removeFlashcard(client, id);
        setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id != id))
    }

    const handleEdit = (editedFlashcard) => {
        console.log(e.target);
        editFlashcard(client, editedFlashcard)
        setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id !== editedFlashcard.id))
        setFlashcards((prevState) => [...prevState, editedFlashcard]);
    }

    const handleAction = (e) => {
        console.log(e.target.database);
        const action = e.target.dataset.get('action');
    }

    return (
        <>
            <Card>
                <Card.Header>
                    <Row className="justify-content-between align-items-center">
                        <h4 className="col-6 mb-0">Flashcards list</h4>
                        <NewFlashcardButton handleAdd={handleAdd}/>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover className="mb-0">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>English</th>
                            <th>French</th>
                            <th>{windowWidth < 650 ? 'St.' : 'Status'}</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <ListFlashcards flashcards={flashcards} handleAction={handleAction}/>
                        {/*<ListFlashcards flashcards={flashcards} handleRemove={handleRemove} handleEdit={handleEdit}/>*/}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}