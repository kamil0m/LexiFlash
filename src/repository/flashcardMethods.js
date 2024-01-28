// These are methods used to communicate with supabase database

export const getFlashcards = async (client) => await client
    .from("flashcards")
    .select("*");

export const editFlashcard = async (client, flashcard) => await client.from("flashcards").update(flashcard).eq("id", flashcard.id);

export const removeFlashcard = async (client, id) => await client.from("flashcards").delete().eq("id", id);

export const addFlashcard = async (client, flashcard) => await client.from("flashcards").insert(flashcard)
