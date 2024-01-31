import {Button} from 'react-bootstrap';
import {useState} from "react";
import EditFlashcardForm from "./EditFlashcardForm.jsx";

export default function EditFlashcardButton({flashcard, handleEdit}) {

    const [modalShow, setModalShow] = useState(false);

    function modalShowToggle() {
        setModalShow((prevState) => !prevState)
    }

    return (
        <>
            <Button className="col-5 mb-0" variant="primary" onClick={() => setModalShow(true)}>
                Edit
            </Button>

            <EditFlashcardForm
                flashcard={flashcard}
                handleEdit={handleEdit}
                show={modalShow}
                onHide={modalShowToggle}
            >

            </EditFlashcardForm>
        </>
    )
}