import {getFlashcards} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useEffect, useState} from "react";

export default function Trainer() {
    const [flashcards, setFlashcards] = useState([]);
    const [front, setFront] = useState();
    const [back, setBack] = useState();

    const client = useSupabase();

    useEffect(() => {
        if (null === client) {
            return
        }

        loadFlashcards()
    }, [client]);

    // useEffect(() => {
    //     const currentWordPair = flashcards[randomNumber(0, flashcards.length)];
    //     console.log(currentWordPair);
    //     setFront(currentWordPair.def);
    //     setBack(currentWordPair.lex);
    // }, []);

    const loadFlashcards = async () => {
        const {data} = await getFlashcards(client);
        setFlashcards(data);
    }

    // flashcards && console.log("vocabSet received by FlashcardMethods.js component");

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return <>
        <div>
            <p className="flashcard__front">{front}</p>
            <p className="flashcard__back">{back}</p>
        </div>
    </>
}