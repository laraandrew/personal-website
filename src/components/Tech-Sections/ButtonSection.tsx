import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const ButtonSection: React.FC = () => {
  return (
    <section className="flex justify-center gap-6 my-6">
      <a href="/resume.pdf" download className="bg-blue-500 p-4 rounded-full text-white hover:bg-blue-600 transition duration-300">
        <FaFileDownload size={24} />
      </a>
      <a href="https://github.com/your-github" target="_blank" className="bg-black p-4 rounded-full text-white hover:bg-gray-800 transition duration-300">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="bg-blue-700 p-4 rounded-full text-white hover:bg-blue-800 transition duration-300">
        <FaLinkedin size={24} />
      </a>
    </section>
  );
}

export default ButtonSection;
