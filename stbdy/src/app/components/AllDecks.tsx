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
    <div>
      <h1 className="text-2xl font-bold text-center text-slate-900">
        All Decks
      </h1>
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
