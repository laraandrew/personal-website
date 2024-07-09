import Image from 'next/image';
import aboutme from '../../../public/assets/imgs/aboutme.png';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
      <header className="text-2xl font-bold mb-4">About Me</header>
      <Image className="w-80 h-auto rounded-lg" src={aboutme} alt="Picture of Andrew and his parents at his college graduation" />
      <p className="text-center mt-4 max-w-xl">Praesent sagittis interdum pharetra. Sed lorem ipsum, luctus et pellentesque at, lobortis quis augue. Morbi eget fringilla velit. Aliquam eu erat a quam mollis fermentum. Sed aliquet consectetur sapien et facilisis. Maecenas dapibus sollicitudin dolor eu vestibulum. Proin tellus enim, dignissim id varius et, facilisis at enim. Morbi in ultricies mauris. Donec mauris magna, tristique sed lectus non, consectetur luctus tortor. Aliquam eget dui rutrum, varius eros at, placerat felis. Duis vitae semper leo. Duis commodo orci sit amet ultricies imperdiet.</p>
    </section>
  );
};

export default AboutSection;
