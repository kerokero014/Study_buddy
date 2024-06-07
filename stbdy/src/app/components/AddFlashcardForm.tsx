// components/AddFlashcardForm.tsx

import { useState } from "react";

interface AddFlashcardFormProps {
  deckId: number;
  onFlashcardAdded: (flashcard: {
    id: number;
    question: string;
    answer: string;
    deckId: number;
    createdAt: Date;
    updatedAt: Date;
  }) => void;
}

const AddFlashcardForm = ({
  deckId,
  onFlashcardAdded,
}: AddFlashcardFormProps) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = { question, answer, deckId };
    console.log("Sending data:", data);

    const response = await fetch("/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const newFlashcard = await response.json();
      console.log("Received new flashcard:", newFlashcard);
      onFlashcardAdded(newFlashcard);
      setQuestion("");
      setAnswer("");
    } else {
      console.error("Failed to add flashcard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="question" className="block text-gray-700">
          Question
        </label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="answer" className="block text-gray-700">
          Answer
        </label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add Flashcard
      </button>
    </form>
  );
};

export default AddFlashcardForm;
