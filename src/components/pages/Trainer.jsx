import {getFlashcards} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useEffect, useState} from "react";
import AnswerBox from "../answerBox/AnswerBox.jsx";
import CategoryIndicator from "../flashcard/CategoryIndicator.jsx";
import FlashcardRepresentation from "../flashcard/FlashcardRepresentation.jsx";

export default function Trainer() {
    const [flashcards, setFlashcards] = useState([]);
    const [dataReady, setDataReady] = useState(false); // Flag to indicate if data is ready
    const [currentFlashcard, setCurrentFlashcard] = useState({});
    const client = useSupabase();

    useEffect(() => {
        if (null === client) {
            return
        }
        loadFlashcards()
    }, [client]);

    useEffect(() => {
        if (flashcards.length > 0) {
            setDataReady(true);
        }
    }, [flashcards]);

    const loadFlashcards = async () => {
        const {data} = await getFlashcards(client);
        setFlashcards(data);
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        if (dataReady) {
            setCurrentFlashcard(getRandomFlashcard(flashcards));
        }
    }, [dataReady]);
    function getRandomFlashcard(){
        return flashcards[getRandomNumber(0, flashcards.length)]
    }

    function switchFlashcards() {
        setDataReady(false); // Set dataReady flag when flashcards are loaded
        setDataReady(true); // Set dataReady flag when flashcards are loaded
        setCurrentFlashcard(getRandomFlashcard());
    }

    return <>
        <CategoryIndicator currentFlashcard={currentFlashcard} />
        <FlashcardRepresentation currentFlashcard={currentFlashcard} />
        <AnswerBox correctAnswer={currentFlashcard} switchFlashcards={switchFlashcards}/>
    </>
}