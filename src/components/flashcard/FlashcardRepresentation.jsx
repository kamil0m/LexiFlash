export default function FlashcardRepresentation({currentFlashcard}) {
    return <>
        <input type="checkbox" id="flashcard__flip-trigger" />
        <label htmlFor="flashcard__flip-trigger" className="flashcard">
            <p className="flashcard__front">{currentFlashcard.def}</p>
            <p className="flashcard__back">{currentFlashcard.lex}</p>
        </label>
    </>
}