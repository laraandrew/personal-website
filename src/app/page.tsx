import HeroSection from '../components/HeroSection';
import AboutSection from '../components/Home-Sections/AboutSection';
import ContactForm from '../components/Home-Sections/ContactForm';
import ProjectSection from '@/components/Home-Sections/ProjectSection';

export default function Page() {
  return (
    <>
        <HeroSection title="Andrew Lara" subtitle="Captivating the World as best I can" bgImageUrl="assets/imgs/home_hero.png" />

      <main>

        <ProjectSection />
        <AboutSection />
        <ContactForm />

      </main>
    </>
  );
}
