import EditFlashcardButton from "../AddNewFlashcard/EditFlashcardButton.jsx";

export default function ListFlashcards({flashcards, handleAction}) {
    return flashcards.map((flashcard, index) => (
        <tr key={index} id={flashcard.id}>
            <td>{flashcard.category} {index}</td>
            <td>{flashcard.lex}</td>
            <td>{flashcard.def}</td>
            <td>{flashcard.status}</td>
            <td>
                <EditFlashcardButton flashcard={flashcard} handleAction={handleAction} />
                <button className="btn btn-danger col-5 mb-0" data-action="remove" onClick={(event) => handleAction(event)}><i className="fa-regular fa-trash-can"></i></button>
            </td>
        </tr>
    ))
}