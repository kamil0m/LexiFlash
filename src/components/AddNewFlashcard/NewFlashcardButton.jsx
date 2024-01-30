import {Button} from 'react-bootstrap';
import {useEffect, useState} from "react";
import NewFlashcardForm from "./NewFlashcardForm.jsx";
import {addFlashcard} from "../../repository/flashcardMethods.js";

export default function NewFlashcardButton({handleAdd}) {

    const [modalShow, setModalShow] = useState(false);

    function modalShowToggle() {
        setModalShow((prevState) => !prevState)
    }

    return (
        <>
            <Button className="col-1 mb-0" variant="primary" onClick={() => setModalShow(true)}>
                +
            </Button>

            <NewFlashcardForm
                handleAdd={handleAdd}
                show={modalShow}
                onHide={modalShowToggle}
            >

            </NewFlashcardForm>
        </>
    )
}