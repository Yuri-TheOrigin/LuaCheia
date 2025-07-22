import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header com navegação */}
      <Header />
      
      {/* Conteúdo principal da página Sobre */}
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Sobre o Time Lua Cheia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
              Esta página está em construção. Em breve você encontrará aqui informações detalhadas sobre nossa história, missão e valores.
            </p>
            
            {/* Espaço reservado para conteúdo futuro */}
            <div className="min-h-[400px] flex items-center justify-center">
              <div className="bg-card/50 rounded-xl p-8 backdrop-blur-sm border border-border">
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  Conteúdo em Desenvolvimento
                </h2>
                <p className="text-muted-foreground">
                  Esta seção será preenchida com informações sobre o time, nossa jornada e objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sobre;

