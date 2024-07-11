// HeroSection.tsx
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgImageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, bgImageUrl }) => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-2xl">{subtitle}</p>
    </section>
  );
};

export default HeroSection;
