import React from 'react';
import CallistoHeader from '../components/callisto/CallistoHeader';
import CallistoHeroSection from '../components/callisto/CallistoHeroSection';
import CallistoPlayersSection from '../components/callisto/CallistoPlayersSection';
import Footer from '../components/Footer';

const Callisto = () => {
  return (
    <div className="min-h-screen bg-background text-foreground theme-callisto">
      {/* Header personalizado para Callisto */}
      <CallistoHeader />
      
      {/* Seção Hero personalizada */}
      <CallistoHeroSection />
      
      {/* Seção de Jogadores personalizada */}
      <CallistoPlayersSection />
      
      {/* Footer (reutilizado) */}
      <Footer />
    </div>
  );
};

export default Callisto;