import {getFlashcards} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useEffect, useState} from "react";
import AnswerBox from "../answerBox/AnswerBox.jsx";

export default function Trainer() {
    const [flashcards, setFlashcards] = useState([]);
    const [dataReady, setDataReady] = useState(false); // Flag to indicate if data is ready

    const client = useSupabase();

    useEffect(() => {
        if (null === client) {
            return
        }
        loadFlashcards()
    }, [client]);

    useEffect(() => {
        if (flashcards.length > 0) {
            setDataReady(true); // Set dataReady flag when flashcards are loaded
        }
    }, [flashcards]);

    const loadFlashcards = async () => {
        const {data} = await getFlashcards(client);
        setFlashcards(data);
    }

    const [currentFlashcard, setCurrentFlashcard] = useState({});

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        if (dataReady) {
            const randomFlashcard = getRandomFlashcard();
            setCurrentFlashcard(randomFlashcard);
            console.log(randomFlashcard);
        }
    }, [dataReady]);
    function getRandomFlashcard(){
        return flashcards[getRandomNumber(0, flashcards.length)]
    }

    function switchFlashcards() {
        setDataReady(false); // Set dataReady flag when flashcards are loaded
        console.log("Data not ready");
        setDataReady(true); // Set dataReady flag when flashcards are loaded
        console.log("Data ready");
        const randomFlashcard = getRandomFlashcard();
        setCurrentFlashcard(randomFlashcard);
    }

    return <>
        <div>
            <h1>{currentFlashcard.def}</h1>
        </div>
        <AnswerBox correctAnswer={currentFlashcard} switchFlashcards={switchFlashcards}/>
    </>
}