import MainFooter from "@/app/components/MainFooter";
import MainHeader from "@/app/components/MainHeader";
import prisma from "../../../../prisma/client";
import DeckDetailClient from "../../components/DeckDetailClient";

async function getDeck(id: number) {
  const deck = await prisma.deck.findUnique({
    where: { id },
    include: { flashcard: true },
  });
  return deck;
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

  return (
    <>
      <MainHeader />
      <DeckDetailClient deck={deck} />;
      <MainFooter />
    </>
  );
};

export default DeckDetail;
