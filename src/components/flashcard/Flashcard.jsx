import {getFlashcards} from "../../repository/FlashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useState, useEffect} from "react";
import ListFlashcards from "./ListFlashcards.jsx";


export default function Flashcard() {
    const [flashcards, setFlashcards] = useState([]);
    const client = useSupabase();

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

    return <table>
        <thead>
        <tr>
            <th>Category</th>
            <th>English</th>
            <th>French</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        < ListFlashcards flashcards={flashcards} />
        </tbody>
    </table>
}