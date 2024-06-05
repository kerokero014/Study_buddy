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
    <div className="mx-auto space-y-4 p-4 md:space-y-6 lg:space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
      {decks.map((deck) => (
        <Deck key={deck.id} title={deck.title} description={deck.description} />
      ))}
    </div>
  );
}
