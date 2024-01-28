import {Button, Form, Modal} from 'react-bootstrap';
import {useState} from "react";
import {useSupabase} from "../../hooks/supabase.js";
import {addFlashcard} from "../../repository/flashcardMethods.js";

export default function CreateFlashcard({handleAdd}) {

    const [modalShow, setModalShow] = useState(false);
    const [formError, setFormError] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        const newFlashcard = {
            category: event.currentTarget.elements.category.value,
            lex: event.currentTarget.elements.lex.value,
            def: event.currentTarget.elements.def.value,
            status: 0
        }
        if (!newFlashcard.category || !newFlashcard.lex || !newFlashcard.def) {
            setFormError("Please complete missing form fields")
            return;
        }
        handleAdd(newFlashcard)
    }

    function NewFlashcard(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adding a new flashcard
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="mb-4" onSubmit={(event) => handleSubmit(event)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="category"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>English</Form.Label>
                            <Form.Control type="text" name="lex"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>French</Form.Label>
                            <Form.Control type="text" name="def"/>
                        </Form.Group>
                        <button variant="primary" type="submit" size="sm">Dodaj</button>
                        <p style={{display: "none", color: "red"}}>{formError}</p>
                    </Form>
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button onClick={props.onHide}>Close</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        );
    }

    return (
        <>
            <Button className="col-2 mb-0" variant="primary" onClick={() => setModalShow(true)}>
                New Flashcard
            </Button>

            <NewFlashcard
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}