import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PlayersSection from './components/PlayersSection';
import NewsSection from './components/NewsSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header com navegação */}
      <Header />
      
      {/* Seção Hero */}
      <HeroSection />
      
      {/* Seção de Jogadores */}
      <PlayersSection />
      
      {/* Seção de Redes Sociais */}
      <SocialSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
