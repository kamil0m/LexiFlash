import {getFlashcards, removeFlashcard} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useState, useEffect} from "react";
import {Card, Container, Row, Table} from "react-bootstrap";
import ListFlashcards from "./ListFlashcards.jsx";


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

    const handleRemove = (event) => {
        if (undefined === event.target.dataset.id) return

        const id = event.target.dataset.id;
        removeFlashcard(client, sid);
        setProducts((prevState) => prevState.filter((product) => product.sid !== sid))
    }

    return (
        <>
            <Card>
                <Card.Header>
                    <Row className="justify-content-between align-items-center">
                        <h4 className="col-6 mb-0">Flashcards list</h4>
                        <div className="d-flex justify-content-end gap-3 col-6"> Tu bedzie addFlashcard
                            {/*<AddProduct handleFormSubmit={handleAdd}/>*/}
                        </div>
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
                        <tbody onClick={(event) => handleRemove(event)}>
                        <ListFlashcards flashcards={flashcards} />
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}