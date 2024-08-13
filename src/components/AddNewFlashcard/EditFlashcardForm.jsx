import {Button, Form, Modal} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage.jsx";
import {useState} from "react";

export default function EditFlashcardForm({flashcard, handleAction, ...otherProps}) {
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [category, setCategory] = useState(flashcard.category)
    const [lex, setLex] = useState(flashcard.lex)
    const [def, setDef] = useState(flashcard.def)

    function handleSubmit(event) {
        event.preventDefault();
        const editForm = event.target.closest('.editForm');
        const editedFlashcard = {
            "id": flashcard.id,
            "category": editForm.querySelector('input[name="category"]').value,
            "lex": editForm.querySelector('input[name="lex"]').value,
            "def": editForm.querySelector('input[name="def"]').value,
            "status": flashcard.status
        };
        if (!editedFlashcard.category || !editedFlashcard.lex || !editedFlashcard.def) {
            setShowErrorMessage(true);
            return
        }
        handleAction(event, editedFlashcard);
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
                    Editing a flashcard id -{flashcard.id}-
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h1>{flashcard}</h1>*/}
                <Form className="mb-4 editForm" onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>English</Form.Label>
                        <Form.Control
                            type="text"
                            name="lex"
                            value={lex}
                            onChange={(e) => setLex(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>French</Form.Label>
                        <Form.Control
                            type="text"
                            name="def"
                            value={def}
                            onChange={(e) => setDef(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="sm" data-action="edit" onClick={(event) => handleSubmit(event)} >Save</Button>
                    {showErrorMessage && <ErrorMessage setShowErrorMessage={setShowErrorMessage} />}
                </Form>
            </Modal.Body>
        </Modal>
    );
}