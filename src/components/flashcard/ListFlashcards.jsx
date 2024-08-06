import EditFlashcardButton from "../AddNewFlashcard/EditFlashcardButton.jsx";

// export default function ListFlashcards({flashcards, handleRemove, handleEdit}) {
//     return flashcards.map(flashcard => (
//             <tr key={flashcard.id} id={flashcard.id}>
//                 <td>{flashcard.category}</td>
//                 <td>{flashcard.lex}</td>
//                 <td>{flashcard.def}</td>
//                 <td>{flashcard.status}</td>
//                 <td>
//                     <EditFlashcardButton flashcard={flashcard} handleEdit={handleEdit}/>
//                     <button className="btn btn-danger col-5 mb-0" onClick={(event) => handleRemove(event)}><i className="fa-regular fa-trash-can"></i></button>
//                 </td>
//             </tr>
//     ))
// }

export default function ListFlashcards({flashcards, handleAction}) {
    return flashcards.map(flashcard => (
        <tr key={flashcard.id} id={flashcard.id}>
            <td>{flashcard.category}</td>
            <td>{flashcard.lex}</td>
            <td>{flashcard.def}</td>
            <td>{flashcard.status}</td>
            <td>
                <EditFlashcardButton flashcard={flashcard} handleAction={handleAction}/>
                <button className="btn btn-danger col-5 mb-0" onClick={(event) => handleAction(event)}><i className="fa-regular fa-trash-can"></i></button>
                <button className="btn btn-danger col-5 mb-0" onClick={handleAction}><i className="fa-regular fa-trash"></i></button>
            </td>
        </tr>
    ))
}