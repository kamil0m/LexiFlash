import {Button, Form, Modal} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage.jsx";
import {useState} from "react";

export default function NewFlashcardForm({handleAdd, ...otherProps}) {
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.currentTarget.elements.category.value)
        const newFlashcard = {
            "category": event.currentTarget.elements.category.value,
            "lex": event.currentTarget.elements.lex.value,
            "def": event.currentTarget.elements.def.value,
            "status": 0
        };
        console.log(newFlashcard);
        if (!newFlashcard.category || !newFlashcard.lex || !newFlashcard.def) {
            setShowErrorMessage(true);
            return
        }
        console.log("podajemy newFlashcard do bazy danych");
        handleAdd(newFlashcard)
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
                <Form className="mb-4" onSubmit={(event) => handleSubmit(event)}>
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
                    <Button variant="primary" type="submit" size="sm">Add</Button>
                    {showErrorMessage && <ErrorMessage setShowErrorMessage={setShowErrorMessage} />}
                </Form>
            </Modal.Body>
        </Modal>
    );
}