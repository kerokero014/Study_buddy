import React from "react";

interface FlashCard {
  id: number;
  question: string;
  answer: string;
}

interface Deck {
  id: number;
  flashcard: FlashCard[];
}

interface CardsProps {
  params: {
    deck: Deck;
    cardId: number; // Changed type to number
  };
}

const Cards: React.FC<CardsProps> = ({ params }) => {
  // Find the card in the deck using the cardId from params
  const card = params.deck.flashcard.find(card => card.id === params.cardId);

  // If the card was not found, return null or some default JSX
  if (!card) {
    return null;
  }

  return (
    <>
      <div>
        <h1>{card.question}</h1>
      </div>
    </>
  );
};

export default Cards;