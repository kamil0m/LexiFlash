// These are methods used to communicate with supabase database

export const getFlashcards = async (client) => await client
    .from("flashcards")
    .select("*");

export const editFlashcard = async (client, flashcard) => await client.from("flashcards").update(flashcard).eq("id", flashcard.id);

export const removeFlashcard = async (client, id) => await client.from("flashcards").delete().eq("id", id);

export const addFlashcard = async (client, flashcard) => await client.from("flashcards").insert(flashcard);

export const addTestFlashcard = async (client) => {
    function getRandomId(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const testFlashcard = {
        "id": getRandomId(10000, 99999),
        "category": "TEST",
        "lex": "LEXBlaBla",
        "def": "DEFBlaBla",
        "status": 0
    };
    await client.from("flashcards").insert(testFlashcard);
}