import HeroSection from '../components/Tech-Sections/HeroSection';
import ButtonSection from '../components/Tech-Sections/ButtonSection';
import SearchSection from '../components/Tech-Sections/SearchSection';
import ProjectsSection from '../components/Tech-Sections/ProjectsSection';

const TechnologyPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ButtonSection />
      <SearchSection />
      <ProjectsSection />
    </div>
  );
}

export default TechnologyPage;
