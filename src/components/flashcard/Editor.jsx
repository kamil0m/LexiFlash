import {addFlashcard, getFlashcards, removeFlashcard, editFlashcard} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useState, useEffect} from "react";
import {Card, Row, Table, Modal} from "react-bootstrap";
import ListFlashcards from "./ListFlashcards.jsx";
import NewFlashcardButton from "../AddNewFlashcard/NewFlashcardButton.jsx";


export default function Editor() {
    const [flashcards, setFlashcards] = useState([]);
    const client = useSupabase();

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
        editFlashcard(client, editedFlashcard)
        setFlashcards((prevState) => prevState.filter((flashcard) => flashcard.id !== editedFlashcard.id))
        setFlashcards((prevState) => [...prevState, editedFlashcard]);
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
                            <th>Status</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <ListFlashcards flashcards={flashcards} handleRemove={handleRemove} handleEdit={handleEdit}/>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}