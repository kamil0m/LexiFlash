import {editFlashcard} from "../../repository/flashcardMethods.js";
import {useState, useEffect} from "react";
import {useSupabase} from "../../hooks/supabase.js";
import {Button} from 'react-bootstrap';


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
        setWrongMessage("Try again. The correct answer is " + correctAnswer.lex);
        correctAnswer.status = 0;
        editFlashcard(client, correctAnswer);
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
        <input type="text" className="answer" id="answer" value={answer} autoComplete="off" onChange={(e) => setAnswer(e.target.value)} />
        <Button className="col-5 mb-0" variant="primary" type={"submit"} onClick={handleSubmit}>Submit</Button>
        <p style={{color: "red"}}>{wrongMessage}</p>
    </form>
}