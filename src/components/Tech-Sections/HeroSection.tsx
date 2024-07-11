import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('assets/imgs/CS_hero.png')" }}>
      <h1 className="text-5xl font-bold mb-4">My Journey with Technology</h1>
    </section>
  );
}

export default HeroSection;
