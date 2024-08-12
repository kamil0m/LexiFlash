import {Button, Form, Modal} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage.jsx";
import {useState} from "react";

export default function NewFlashcardForm({handleAction, ...otherProps}) {
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const editForm = event.target.closest('.editForm');
        const newFlashcard = {
            "category": editForm.querySelector('input[name="category"]').value,
            "lex": editForm.querySelector('input[name="lex"]').value,
            "def": editForm.querySelector('input[name="def"]').value,
            "status": 0
        };
        console.log(newFlashcard);
        if (!newFlashcard.category || !newFlashcard.lex || !newFlashcard.def) {
            setShowErrorMessage(true);
            return
        }
        console.log("podajemy newFlashcard do bazy danych");
        handleAction(event, newFlashcard)
    }

    return (
        <Modal
            {...otherProps}
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
                <Form className="mb-4 editForm" onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="category" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>English</Form.Label>
                        <Form.Control type="text" name="lex"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>French</Form.Label>
                        <Form.Control type="text" name="def"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" size="sm" data-action="add" onClick={(event) => handleSubmit(event)} >Add</Button>
                    {showErrorMessage && <ErrorMessage setShowErrorMessage={setShowErrorMessage} />}
                </Form>
            </Modal.Body>
        </Modal>
    );
}