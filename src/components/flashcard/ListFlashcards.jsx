import {getFlashcards} from "../../repository/flashcardMethods.js";
import {useSupabase} from "../../hooks/supabase.js";
import {useState, useEffect} from "react";


export default function ListFlashcards() {
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

    return (
        <table>
            <thead>
            <tr>
                <th>Category</th>
                <th>English</th>
                <th>French</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {flashcards.map(flashcard => (
                <tr key={flashcard.id}>
                    <td>{flashcard.category}</td>
                    <td>{flashcard.lex}</td>
                    <td>{flashcard.def}</td>
                    <td>{flashcard.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}