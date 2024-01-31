import NewFlashcardButton from "../AddNewFlashcard/NewFlashcardButton.jsx";
import EditFlashcardButton from "../AddNewFlashcard/EditFlashcardButton.jsx";

export default function ListFlashcards({flashcards, handleRemove, handleEdit}) {
    return flashcards.map(flashcard => (
            <tr key={flashcard.id} id={flashcard.id}>
                <td>{flashcard.category}</td>
                <td>{flashcard.lex}</td>
                <td>{flashcard.def}</td>
                <td>{flashcard.status}</td>
                <td>
                    <EditFlashcardButton flashcard={flashcard} handleEdit={handleEdit}/>
                    <button onClick={(event) => handleRemove(event)}>delete</button>
                </td>
            </tr>
    ))
}