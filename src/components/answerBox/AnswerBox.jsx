import {useState} from "react";

export default function AnswerBox({correctAnswer}) {

    const [answer, setAnswer] = useState();

    function handleCorrect() {
        console.log("correct!")
    }
    function handleIncorrect() {
        console.log(`Incorrect ! Correct answer is blabla`)
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Typed answer is " + answer);
        answer === correctAnswer ? handleCorrect() : handleIncorrect()

    }
    return <form className="answer__box">
        <label htmlFor="answer">Type your answer below:</label>
        <input type="text" className="answer" id="answer" onChange={(e) => setAnswer(e.target.value)} />
        <button type={"submit"} onClick={handleSubmit}>Potwierdz</button>
    </form>
}