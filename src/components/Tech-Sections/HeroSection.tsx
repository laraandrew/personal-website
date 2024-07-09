import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/assets/imgs/placeholder-hero.png')" }}>
      <h1 className="text-5xl font-bold mb-4">Computer Science</h1>
      <p className="text-2xl">Embrace change, my Journey with Technology</p>
    </section>
  );
}

export default HeroSection;
