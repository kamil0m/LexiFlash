import {Button} from 'react-bootstrap';
import {useState} from "react";
import NewFlashcardForm from "./NewFlashcardForm.jsx";

export default function NewFlashcardButton({handleAction}) {

    const [modalShow, setModalShow] = useState(false);

    function modalShowToggle() {
        setModalShow((prevState) => !prevState)
    }

    return (
        <>
            <Button className="col-1 mb-0" variant="primary" onClick={() => setModalShow(true)}>
                <i className="fa-regular fa-plus"></i>
            </Button>

            <NewFlashcardForm
                handleAction={handleAction}
                show={modalShow}
                onHide={modalShowToggle}
            >

            </NewFlashcardForm>
        </>
    )
}