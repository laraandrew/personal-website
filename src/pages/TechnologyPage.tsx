// src/pages/technology.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const TechnologyPage: React.FC = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: `Project ${i + 1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['college', 'personal', 'front-end'].slice(0, Math.floor(Math.random() * 3) + 1),
  }));

  return (
    <div className="technology-page">
      <section className="hero-section h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/images/placeholder.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Computer Science</h1>
        <p className="text-2xl">Embrace change, my Journey with Technology</p>
      </section>

      <section className="flex justify-center gap-4 py-8">
        <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition">
          <FaFileDownload size={24} />
        </button>
        <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition">
          <FaGithub size={24} />
        </button>
        <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition">
          <FaLinkedin size={24} />
        </button>
      </section>

      <section className="py-8">
        <div className="flex justify-between items-center mb-4 px-8">
          <button onClick={() => setSearchActive(!searchActive)} className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">Search</button>
          <div className="flex gap-4">
            <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">Filter 1</button>
            <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">Filter 2</button>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-8 ${searchActive ? '' : 'hidden'}`}>
          <input type="text" className="col-span-full p-2 border rounded" placeholder="Search..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {cards.map(card => (
            <div key={card.id} className="relative cursor-pointer hover:shadow-lg transition" onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}>
              <Image src="/images/placeholder.jpg" alt={card.title} width={500} height={500} className="rounded-lg" />
              <div className="text-center mt-2">
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              {selectedCard === card.id && (
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="mb-4">{card.description}</p>
                  <div className="flex gap-2 mb-4">
                    {card.tags.map(tag => (
                      <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedCard(null)} className="text-red-500">Close</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
