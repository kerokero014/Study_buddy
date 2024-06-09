interface DeckProps {
  id: number;
  title: string;
  description: string | null;
  onDelete: (id: number) => void;
}

export default function Deck({ id, title, description, onDelete }: DeckProps) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-auto max-w-md cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{description}</p>

        <button
          onClick={handleDelete}
          className="hover:bg-red-800 hover:text-white px-1 py-1 mt-4 rounded-lg text-black"
        >
          x
        </button>
      </div>
    </div>
  );
}
