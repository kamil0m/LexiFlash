import {getFlashcards} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useEffect, useState} from "react";
export default function Trainer() {
    const [flashcards, setFlashcards] = useState([]);
    const client = useSupabase();
    console.log(flashcards);
    console.log("z poczatku flashcard jest pusta tablica a po sekundzie jest pobierana z kontextu");
    useEffect(() => {
        if (null === client) {
            return
        }
        loadFlashcards()
    }, [client]);
    const loadFlashcards = async () => {
        const {data} = await getFlashcards(client);
        setFlashcards(data);
    }
    const [currentFlashcard, setCurrentFlashcard] = useState({});
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    useEffect(() => {
        if (flashcards.length === 0) {
            return
        }
        const randomFlashcard = getRandomFlashcard();
        setCurrentFlashcard(randomFlashcard);
        console.log(currentFlashcard);
    }, [flashcards])
    function getRandomFlashcard(){
        return flashcards[getRandomNumber(0, flashcards.length)]
    }
    return <>
        <div>
            <h1>{currentFlashcard.def}</h1>
            <ul>
                {flashcards.map((flashcard) => (
                    <li key={flashcard.lex}>{flashcard.def}</li>
                ))}
            </ul>
        </div>
    </>
}
