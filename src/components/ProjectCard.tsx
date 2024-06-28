type ProjectCardProps = {
    title: string;
    description: string;
    imgSrc: string;
    buttonText: string;
  };
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgSrc, buttonText }) => {
    return (
      <div className="flex items-center bg-gray-200 p-4 rounded-lg shadow-md transition transform hover:scale-105">
        <img src={imgSrc} alt={`${title} logo`} className="w-1/3 rounded-lg" />
        <div className="flex-1 text-center px-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-700">{description}</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-gray-800 rounded-lg hover:bg-orange-500 hover:text-white transition">{buttonText}</button>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  