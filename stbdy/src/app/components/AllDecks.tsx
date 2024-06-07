"use client";

import { useEffect, useState } from "react";
import Deck from "./Deck";
import Link from "next/link";
import AddDeckModal from "./AddDeckModal";

interface DeckProps {
  id: number;
  title: string;
  description: string | null;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

async function fetchDecks() {
  const response = await fetch("/api/decks");
  if (!response.ok) {
    throw new Error("Failed to fetch decks");
  }
  return response.json();
}

export default function AllDecks() {
  const [decks, setDecks] = useState<DeckProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeckAdded = (newDeck: DeckProps) => {
    setDecks((prevDecks) => [...prevDecks, newDeck]);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const loadDecks = async () => {
      try {
        const fetchedDecks = await fetchDecks();
        setDecks(fetchedDecks);
      } catch (error) {
        console.error(error);
      }
    };
    loadDecks();
  }, []);

  return (
    <div className="bg-slate-300 container mx-auto p-8 m-11 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">All Decks</h1>
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add New Deck
        </button>
      </div>
      {isModalOpen && (
        <AddDeckModal
          userId={1} // Assume a userId for now; in a real app, fetch the logged-in user's ID
          onClose={handleCloseModal}
          onDeckAdded={handleDeckAdded}
        />
      )}
      <div className="grid gap-4 md:gap-6 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {decks.map((deck) => (
          <Link key={deck.id} href={`/decks/${deck.id}`} passHref>
            <Deck
              id={deck.id}
              title={deck.title}
              description={deck.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
