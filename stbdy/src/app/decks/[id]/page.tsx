'use client';
import prisma from "../../../../prisma/client";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import AddFlashcardForm from "@/app/components/AddFlashcardForm";
import { useState } from "react";

async function getDeck(id: number) {
  const deck = await prisma.deck.findUnique({
    where: { id },
    include: { flashcard: true },
  });
  return deck;
}

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  deckId: number;
  createdAt: Date;
  updatedAt: Date;
}

interface DeckDetailProps {
  params: { id: string };
}

const DeckDetail = async ({ params }: DeckDetailProps) => {
  const id = parseInt(params.id);
  const deck = await getDeck(id);

  if (!deck) {
    return <div>Deck not found</div>;
  }

  const [flashcards, setFlashcards] = useState(deck.flashcard);

  const handleFlashcardAdded = (newFlashcard: Flashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  return (
    <>
      <MainHeader />
      <div className="container mx-auto p-8 m-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">
          {deck.title}
        </h1>
        <p className="text-gray-700 mb-6 text-lg text-center">
          {deck.description}
        </p>
        <AddFlashcardForm
          deckId={deck.id}
          onFlashcardAdded={handleFlashcardAdded}
        />
        <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {deck.flashcard.map((flashcard: Flashcard) => (
            <div
              key={flashcard.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 ease-in"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {flashcard.question}
              </h2>
              <p className="text-gray-600 text-lg">{flashcard.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default DeckDetail;
