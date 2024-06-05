import prisma from "../../../prisma/client";
import Deck from "./Deck";
import Link from "next/link";

async function getDecks() {
  const decks = await prisma.deck.findMany();
  return decks;
}

export default async function AllDecks() {
  const decks = await getDecks();
  return (
    <div className="mx-auto space-y-4 p-4 md:space-y-6 lg:space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
      {decks.map((deck) => (
        <Link key={deck.id} href={`/decks/${deck.id}`}>
          <Deck
            id={deck.id}
            title={deck.title}
            description={deck.description}
          />
        </Link>
      ))}
    </div>
  );
}
