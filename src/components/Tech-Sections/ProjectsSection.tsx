import React from 'react';
import ProjectCard from './components/ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    { title: 'LensByLara', imgSrc: '/assets/imgs/photography.png', tags: ['Photography', 'Completed'], bgColor: 'bg-blue-200' },
    { title: 'Politics and Progress', imgSrc: '/assets/imgs/government.png', tags: ['Politics', 'Ongoing'], bgColor: 'bg-yellow-200' },
    { title: 'Computer Science', imgSrc: '/assets/imgs/technology.png', tags: ['Tech', 'Planned'], bgColor: 'bg-red-200' },
    // Add more projects here...
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          img={project.imgSrc}
          tags={project.tags}
          bgColor={project.bgColor}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
