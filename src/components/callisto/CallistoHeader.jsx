import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import luaCheiaLogo from '../../assets/LUACHEIALOGO.png';

const CallistoHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Aponta para o hero da própria página Callisto */}
          <Link to="/callisto" className="flex items-center space-x-3">
            <img 
              src={luaCheiaLogo} 
              alt="Lua Callisto Logo" 
              className="h-10 rounded-full"
            />
            <span className="text-xl font-bold callisto-text-gradient">Lua Callisto</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('callisto-home')}
              className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('callisto-players')}
              className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Jogadores
            </button>
            <Link 
              to="/"
              className="cor-cheia transition-colors duration-300"
            >
              Lua Cheia
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('callisto-home')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('callisto-players')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Jogadores
              </button>
              <Link 
                to="/"
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Lua Cheia
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default CallistoHeader;

