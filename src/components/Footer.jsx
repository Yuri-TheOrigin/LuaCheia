import React from 'react';
import { Heart, Moon } from 'lucide-react';
import luaCheiaLogo from '../assets/LUACHEIALOGO.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* Conteúdo Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src={luaCheiaLogo} 
                alt="Lua Cheia Logo" 
                className="h-8 rounded-full"
              />
              <span className="text-lg font-bold text-gradient">Lua Cheia</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Time competitivo de Overwatch 2 dedicado à excelência e ao trabalho em equipe.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm mx-auto"
              >
                Início
              </button>
              <button 
                onClick={() => document.getElementById('players').scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm mx-auto"
              >
                Jogadores
              </button>
              <button 
                onClick={() => document.getElementById('news').scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm mx-auto"
              >
                Notícias
              </button>
              <button 
                onClick={() => document.getElementById('social').scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm mx-auto"
              >
                Redes Sociais
              </button>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="text-center md:text-right">
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contato@luacheia.com</p>
              <p>Discord: Lua Cheia#1234</p>
              <p>Competitivo • Brasil</p>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Lua Cheia. Todos os direitos reservados.</span>
            </div>

            {/* Créditos */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart size={14} className="text-red-400" />
              <span>para a comunidade de Overwatch 2</span>
              <Moon size={14} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Overwatch 2 é uma marca registrada da Blizzard Entertainment, Inc. 
            Este site não é afiliado oficialmente à Blizzard Entertainment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

