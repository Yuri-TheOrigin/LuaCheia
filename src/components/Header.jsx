import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import luaCheiaLogo from '../assets/LUACHEIALOGO.png';

const Header = () => {
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

  const handleNavigation = (sectionId) => {
    // Se estamos na página inicial, faz scroll
    if (window.location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Se estamos em outra página, navega para a inicial e depois faz scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={luaCheiaLogo} 
              alt="Lua Cheia Logo" 
              className="h-10 rounded-full"
            />
            <span className="text-xl font-bold text-gradient">Lua Cheia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('players')}
              className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Jogadores
            </button>
            <button 
              onClick={() => handleNavigation('social')}
              className="text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Redes Sociais
            </button>
            <Link 
              to="/callisto"
              className="text-pink-400 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Lua Callisto
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
                onClick={() => handleNavigation('home')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Início
              </button>
              <button 
                onClick={() => handleNavigation('players')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Jogadores
              </button>
              <button 
                onClick={() => handleNavigation('news')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Notícias
              </button>
              <button 
                onClick={() => handleNavigation('social')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Redes Sociais
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;