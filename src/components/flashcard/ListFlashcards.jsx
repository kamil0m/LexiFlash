export default function ListFlashcards({flashcards}) {
    return (
        flashcards.map(flashcard => (
            <tr key={flashcard.id}>
                <td>{flashcard.category}</td>
                <td>{flashcard.def}</td>
                <td>{flashcard.lex}</td>
                <td>{flashcard.status}</td>
            </tr>
        ))
    )
}