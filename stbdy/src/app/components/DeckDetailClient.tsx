// components/DeckDetailClient.tsx

"use client";

import { useState } from "react";
import AddFlashcardForm from "./AddFlashcardForm";
import Modal from "./Modal";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  deckId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Deck {
  id: number;
  title: string;
  description: string | null;
  flashcard: Flashcard[];
}

interface DeckDetailClientProps {
  deck: Deck;
}

async function deleteFlashcard(id: number) {
  const response = await fetch(`/api/flashcards/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete flashcard");
  }
  return response.json();
}

const DeckDetailClient = ({ deck }: DeckDetailClientProps) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(deck.flashcard);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFlashcardAdded = (newFlashcard: Flashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  const handleFlashcardDeleted = (id: number) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((flashcard) => flashcard.id !== id)
    );
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteFlashcard(id);
      handleFlashcardDeleted(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-slate-200 container mx-auto p-8 m-11 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{deck.title}</h1>
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add New Flashcard
        </button>
      </div>
      <p className="text-gray-700 mb-6">{deck.description}</p>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddFlashcardForm
          deckId={deck.id}
          onFlashcardAdded={handleFlashcardAdded}
        />
      </Modal>
      <div className="grid gap-4 md:gap-6 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {flashcards.map((flashcard) => (
          <div
            className="bg-white shadow-lg rounded-lg p-4 relative flip-card"
            key={flashcard.id}
            style={{ minHeight: "200px" }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 className="text-xl font-bold">{flashcard.question}</h2>
              </div>
              <div className="flip-card-back">
                <p className="text-gray-600">{flashcard.answer}</p>
                <button
                  onClick={() => handleDelete(flashcard.id)}
                  className="absolute text-black bottom-1 right-2 hover:bg-red-500 hover:text-white px-1 py-1 rounded-2xl"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckDetailClient;
