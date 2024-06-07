import { useState } from "react";

interface AddDeckModalProps {
  userId: number;
  onClose: () => void;
  onDeckAdded: (deck: {
    id: number;
    title: string;
    description: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
  }) => void;
}

const AddDeckModal = ({ userId, onClose, onDeckAdded }: AddDeckModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, userId }),
    });

    if (response.ok) {
      const newDeck = await response.json();
      onDeckAdded(newDeck);
      setTitle("");
      setDescription("");
      onClose();
    } else {
      console.error("Failed to add deck");
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Add New Deck</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Add Deck
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDeckModal;
