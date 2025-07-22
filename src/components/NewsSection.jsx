import React from 'react';
import { Calendar, Trophy, Users, Gamepad2 } from 'lucide-react';

const NewsSection = () => {
  // Dados das notícias (exemplo)
  const news = [
    {
      id: 1,
      title: "Vitória no Torneio Regional",
      date: "15 de Janeiro, 2025",
      category: "Competição",
      icon: Trophy,
      excerpt: "O time Lua Cheia conquistou o primeiro lugar no torneio regional de Overwatch 2, demonstrando excelente coordenação e estratégia.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10 border-yellow-500/30"
    },
    {
      id: 2,
      title: "Novo Membro no Time",
      date: "10 de Janeiro, 2025",
      category: "Time",
      icon: Users,
      excerpt: "Damos as boas-vindas ao nosso novo jogador de DPS, GalaxyShot, que se junta ao roster principal do time.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/30"
    },
    {
      id: 3,
      title: "Treinos Intensivos",
      date: "5 de Janeiro, 2025",
      category: "Treinamento",
      icon: Gamepad2,
      excerpt: "Iniciamos uma nova rotina de treinos focada em melhorar nossa coordenação de equipe e estratégias avançadas.",
      color: "text-green-400",
      bgColor: "bg-green-500/10 border-green-500/30"
    },
    {
      id: 4,
      title: "Próximo Torneio",
      date: "20 de Janeiro, 2025",
      category: "Evento",
      icon: Calendar,
      excerpt: "Estamos nos preparando para o próximo grande torneio nacional. Acompanhem nossas redes sociais para mais informações.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/30"
    }
  ];

  return (
    <section id="news" className="py-20 moon-gradient">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Últimas Notícias</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades e conquistas do time Lua Cheia
          </p>
        </div>

        {/* Grid de Notícias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article) => {
            const IconComponent = article.icon;
            return (
              <article 
                key={article.id}
                className={`bg-card/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover-glow ${article.bgColor}`}
              >
                {/* Header do Card */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                      <IconComponent size={20} className={article.color} />
                    </div>
                    <div>
                      <span className={`text-sm font-semibold ${article.color}`}>
                        {article.category}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {article.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Footer do Card */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <button className="text-primary hover:text-secondary transition-colors duration-300 text-sm font-semibold">
                    Ler mais
                  </button>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    <span>Recente</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Não Perca Nenhuma Novidade
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Siga nossas redes sociais para acompanhar todas as atualizações, 
              resultados de jogos e bastidores do time Lua Cheia.
            </p>
            <button 
              onClick={() => document.getElementById('social').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105"
            >
              Seguir nas Redes Sociais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

