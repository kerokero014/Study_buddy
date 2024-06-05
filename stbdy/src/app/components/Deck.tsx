interface DeckProps {
  title: string;
  description: string | null;
}

export default function Deck({ title, description }: DeckProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md mx-auto cursor-pointer">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
