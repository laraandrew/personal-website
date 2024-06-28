import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';

export default function Page() {
  return (
    <>
      <WelcomeSection />
      <main>
        <section id="projects" className="main-section flex justify-evenly items-center flex-col gap-4">
          <header>Projects</header>
          <ProjectCard
            title="LensByLara"
            description="A simple hobby that turned into a passion"
            imgSrc="/assets/imgs/photography.png"
            buttonText="Learn more!"
          />
          <ProjectCard
            title="Politics and Progress"
            description="Proin tortor enim, hendrerit vel laoreet ut, pulvinar quis velit. Suspendisse vitae maximus lorem, ac hendrerit massa"
            imgSrc="/assets/imgs/government.png"
            buttonText="Dive in"
          />
          <ProjectCard
            title="Computer Science"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi neque, faucibus ut eros in, tristique venenatis dui."
            imgSrc="/assets/imgs/technology.png"
            buttonText="Click here"
          />
        </section>
        <AboutSection />
        <ContactForm />
      </main>
    </>
  );
}
