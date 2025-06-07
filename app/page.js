
'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">📝 EasyContract</h1>
      <p className="mb-6 text-lg text-gray-600">Générez facilement vos contrats informatiques</p>
      <Link href="/generator">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Démarrer la génération
        </button>
      </Link>
    </main>
  );
}
