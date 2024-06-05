import { useEffect, useState } from "react";
import prisma from "../../../prisma/client";
import Deck from "./Deck";

async function getDecks() {
  const decks = await prisma.deck.findMany();
  return decks;
}

export default async function AllDecks() {
  const decks = await getDecks();
  return (
    <div className="container mx-auto p-4">
      {decks.map((deck) => (
        <Deck
          key={deck.id}
          title={deck.title}
          description={deck.description}
        />
      ))}
    </div>
  );
}
