import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  buttonText: string;
  imgFirst: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgSrc, buttonText, imgFirst }) => {
  return (
    <div className={`flex flex-col gap-2 justify-center md:flex-row bg-white p-6 rounded-lg shadow-md ${imgFirst ? '' : 'md:flex-row-reverse'}`}>
      <Image src={imgSrc} alt={title} width={250} height={250} className="max-w-xs md:w-1/2 md:mb-0 rounded-full shadow-lg" />
      <div className="md:w-1/2 flex flex-col gap-4 text-center items-center justify-evenly ">
        <h3 className="text-4xl text-black font-black underline decoration-double decoration-red-300">{title}</h3>
        <p className="text-gray-600 text-2xl">{description}</p>
        <button className="w-fit p-3 rounded-lg text-gray-800 bg-yellow-500 hover:bg-yellow-600 transition duration-300 transform hover:scale-105 shadow-lg">{buttonText}</button> {/* Added transform hover:scale-105 and shadow-lg */}
      </div>
    </div>
  );
}

export default ProjectCard;
