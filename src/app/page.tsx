import WelcomeSection from '../components/Home-Sections/WelcomeSection';
import AboutSection from '../components/Home-Sections/AboutSection';
import ContactForm from '../components/Home-Sections/ContactForm';
import ProjectSection from '@/components/Home-Sections/ProjectSection';

export default function Page() {
  return (
    <>
      <WelcomeSection />
      <main>

        <ProjectSection />
        <AboutSection />
        <ContactForm />

      </main>
    </>
  );
}
