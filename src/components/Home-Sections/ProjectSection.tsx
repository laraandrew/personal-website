import ProjectCard from "./components/ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <ProjectCard
            title="LensByLara"
            description="Discover how I capture the world's beauty through my lens."
            imgSrc="/assets/imgs/photography.png"
            buttonText="Discover"
            imgFirst={true}
          />
          <ProjectCard
            title="Politics and Progress"
            description="A collection of my past essays, personal beliefs, political experiences, and the organizations I endorse."
            imgSrc="/assets/imgs/government.png"
            buttonText="Learn more"
            imgFirst={false}
          />
          <ProjectCard
            title="Computer Science"
            description="A complete gallery of past works, experiences and professional advancement"
            imgSrc="/assets/imgs/technology.png"
            buttonText="Click here"
            imgFirst={true}
          />
        </div>
      </div>
    </section>
  );
}
