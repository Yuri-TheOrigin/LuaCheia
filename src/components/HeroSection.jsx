import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import luaCheiaLogo from '../assets/LUACHEIALOGO.png';


const HeroSection = () => {
  const scrollToPlayers = () => {
    const element = document.getElementById('players');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center z-10">
        {/* Logo Principal */}
        <div className="mb-8 float-animation">
          <img 
            src={luaCheiaLogo} 
            alt="Lua Cheia Logo" 
            className="h-32 md:h-48 mx-auto"
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Lua Cheia</span>
        </h1>

        {/* Subtítulo */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
          Time de Overwatch
        </h2>

        {/* Descrição */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Somos um time competitivo dedicado a alcançar a excelência no cenário de Overwatch 2. 
          Unidos pela paixão pelo jogo e pelo espírito de equipe.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            to="/sobre"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105 inline-block"
          >
            Sobre o Time
          </Link>
          <button 
            onClick={scrollToPlayers}
            className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
          >
            Players
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-primary cursor-pointer hover:text-secondary transition-colors duration-300"
            onClick={scrollToPlayers}
          />
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-secondary rounded-full opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;

