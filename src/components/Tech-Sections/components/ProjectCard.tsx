"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  img: string;
  tags: string[];
  bgColor: string;  // Accept any string as the background color
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, img, tags, bgColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 cursor-pointer ${bgColor}`}
      onClick={handleExpandClick}
    >
      <Image src={img} alt={title} width={200} height={200} className="rounded-lg mb-4" />
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <div className="flex justify-center gap-2 mb-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p className="text-center">This is an expanded description of the project. It contains more details about the project and relevant links.</p>
          <a href="https://github.com/your-github" target="_blank" className="text-blue-500 underline mt-2 block text-center">GitHub Repository</a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
