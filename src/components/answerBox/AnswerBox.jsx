import {editFlashcard} from "../../repository/flashcardMethods.js";
import {useState, useEffect} from "react";
import {useSupabase} from "../../hooks/supabase.js";


export default function AnswerBox({correctAnswer, switchFlashcards}) {

    const [answer, setAnswer] = useState("");
    const [wrongMessage, setWrongMessage] = useState("");
    const client = useSupabase();

    function handleCorrect(e) {
        correctAnswer.status < 5 && correctAnswer.status++;
        console.log("correct answer!")
        editFlashcard(client, correctAnswer);
        switchFlashcards();
        setAnswer("");

    }
    function handleIncorrect() {
        console.log(`Incorrect ! Correct answer is blabla`);
        setWrongMessage("Try again. The correct answer is " + correctAnswer.lex);

    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Typed answer is " + answer);
        answer === correctAnswer.lex ? handleCorrect() : handleIncorrect();
    }

    useEffect(() => {
        if (wrongMessage !== "") {
            const wrongMessagePopUp = setTimeout(() => {
                setWrongMessage("")
            }, 3000)
        }
    }, [wrongMessage]);

    return <form className="answer__box">
        <label htmlFor="answer">Type your answer below:</label>
        <input type="text" className="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type={"submit"} onClick={handleSubmit}>Potwierdz</button>
        <p style={{color: "red"}}>{wrongMessage}</p>
    </form>
}