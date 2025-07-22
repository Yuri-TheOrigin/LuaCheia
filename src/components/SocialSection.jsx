import React from 'react';
import { 
  MessageCircle, 
  Youtube,
  Twitter,
  ExternalLink
} from 'lucide-react';

const SocialSection = () => {
  // Links das redes sociais (exemplo - substitua pelos links reais)
  const socialLinks = [
  
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/LuaCheiaOW",
      description: "Fique por dentro das últimas atualizações e notícias",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/30",
      hoverColor: "hover:bg-blue-500/20"
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://t.co/KbzVtKdA9L",
      description: "Junte-se ao nosso servidor para conversar com o time e outros fãs",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/30",
      hoverColor: "hover:bg-indigo-500/20"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      description: "Assista aos nossos highlights e análises de jogadas",
      color: "text-red-400",
      bgColor: "bg-red-500/10 border-red-500/30",
      hoverColor: "hover:bg-red-500/20"
    }
  ];

  return (
    <section id="social" className="py-20 space-pattern">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Redes Sociais</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte-se conosco e faça parte da comunidade Lua Cheia
          </p>
        </div>

        {/* Grid de Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-card/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover-glow group ${social.bgColor} ${social.hoverColor}`}
              >
                {/* Ícone e Nome */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className={social.color} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground flex items-center">
                      {social.name}
                      <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </h3>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {social.description}
                </p>

                {/* Indicador de Link */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className={`text-sm font-semibold ${social.color} group-hover:underline`}>
                    Seguir →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Seção de Contato */}
        <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-gradient">
            Entre em Contato
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tem alguma proposta, patrocínio ou quer fazer parte do time? 
            Entre em contato conosco através das nossas redes sociais ou envie um email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:contato@luacheia.com" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>contato@luacheia.com</span>
              <ExternalLink size={16} />
            </a>
            <a 
              href="https://t.co/KbzVtKdA9L" 
              className="border border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

