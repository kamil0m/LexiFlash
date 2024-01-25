export const getFlashcards = async (client) => await client
    .from("flashcards")
    .select("*");

// export const removeFlashcard = async (client, id) => await client.from("flashcards").delete().eq("id", id);
//
// export const addFlashcard = async (client, flashcard) => await client.from("flashcards").insert(flashcard).eq("id", flashcard.id);
//
// export const editFlashcard = async (client, flashcard) => await client.from("flashcards").update(flashcard).eq("id", flashcard.id);