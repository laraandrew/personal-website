import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';

export default function Page() {
  return (
    <>
      <WelcomeSection />
      <main>
        <AboutSection />
        <ContactForm />
      </main>
    </>
  );
}
