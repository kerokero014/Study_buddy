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
    <div className="mx-auto p-4 grid gap-4 md:gap-6 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
  );
}
