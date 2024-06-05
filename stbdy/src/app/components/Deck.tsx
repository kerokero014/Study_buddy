interface DeckProps {
  title: string;
  description: string | null;
}

export default function Deck({ title, description }: DeckProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-auto max-w-md cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
