// components/DeckDetailClient.tsx

'use client';

import { useState } from 'react';
import AddFlashcardForm from './AddFlashcardForm';

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
  description: string | null; // Allow description to be null
  flashcard: Flashcard[];
}

interface DeckDetailClientProps {
  deck: Deck;
}

const DeckDetailClient = ({ deck }: DeckDetailClientProps) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(deck.flashcard);

  const handleFlashcardAdded = (newFlashcard: Flashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{deck.title}</h1>
      <p className="text-gray-700 mb-6">{deck.description}</p>
      <AddFlashcardForm deckId={deck.id} onFlashcardAdded={handleFlashcardAdded} />
      <div className="grid gap-4 md:gap-6 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {flashcards.map((flashcard) => (
          <div key={flashcard.id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">{flashcard.question}</h2>
            <p className="text-gray-600">{flashcard.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckDetailClient;
