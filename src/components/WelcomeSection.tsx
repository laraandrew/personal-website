const WelcomeSection: React.FC = () => {
    return (
      <header id="welcome-section" className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <h1 className="text-5xl font-bold mb-4">Andrew Lara Portfolio</h1>
        <p className="text-2xl">Captivating the world the best that I can</p>
      </header>
    );
  };
  
  export default WelcomeSection;
  