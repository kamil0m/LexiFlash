import {Button} from 'react-bootstrap';
import {useState} from "react";
import EditFlashcardForm from "./EditFlashcardForm.jsx";

export default function EditFlashcardButton({flashcard, handleAction}) {

    const [modalShow, setModalShow] = useState(false);

    function modalShowToggle() {
        setModalShow((prevState) => !prevState)
    }

    return (
        <>
            <Button className="col-5 mb-0" variant="primary" onClick={() => modalShowToggle()}>
                <i className="fa-regular fa-pen-to-square"></i>
            </Button>

            <EditFlashcardForm
                flashcard={flashcard}
                handleAction={handleAction}
                show={modalShow}
                onHide={modalShowToggle}
            >
            </EditFlashcardForm>
        </>
    )
}