import {Button} from 'react-bootstrap';
import {useState} from "react";
import EditFlashcardForm from "./EditFlashcardForm.jsx";
import { useRouteLoaderData } from 'react-router-dom';

export default function EditFlashcardButton({flashcard, handleAction}) {

    const [modalShow, setModalShow] = useState(false);

    function modalShowToggle() {
        setModalShow((prevState) => !prevState)
    }

    // In case the newly added flashcard is edited, first refresh the page for supabase to atribute an id
    function handleClick() {
        event.target.closest("tr").id ? modalShowToggle() : location.reload();
    }

    return (
        <>
            <Button className="col-5 mb-0" variant="primary" onClick={(e) => handleClick()}>
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