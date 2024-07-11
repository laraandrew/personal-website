import HeroSection from '../../components/HeroSection';
import ButtonSection from '../../components/Tech-Sections/ButtonSection';
import SearchSection from '../../components/Tech-Sections/SearchSection';
import ProjectsSection from '../../components/Tech-Sections/ProjectsSection';

const TechnologyPage: React.FC = () => {
  return (
    <div>
      <HeroSection title="Computer Science" subtitle="My Journey with Technology" bgImageUrl="assets/imgs/CS_hero.png" />
      <ButtonSection />
      <SearchSection />
      <ProjectsSection />
    </div>
  );
}

export default TechnologyPage;
