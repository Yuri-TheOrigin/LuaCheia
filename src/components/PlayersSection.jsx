import React from 'react';
import luaCheiaLogo from '../assets/LUACHEIALOGO.png';
import jojoLogo from '../assets/jojolucio.png';
import ciscoLogo2 from '../assets/cisco2.png';
import sennaLogo from '../assets/senna.png';
import piplupLogo from '../assets/piplup.png';
import memedzLogo from '../assets/memedz.png';
import diaboLogo from '../assets/diabo.png';

const PlayersSection = () => {
  // Dados dos jogadores
  const players = [
    {
      name: "Cisco",
      role: "Tank",
      description: "Mauga OTP Escondido",
      color: "text-blue-400",
      image: ciscoLogo2
    },
    {
      name: "Piplup",
      role: "DPS",
      description: "Gringo Twitter Guy",
      color: "text-red-400",
      image: piplupLogo
    },
    {
      name: "memedz",
      role: "DPS",
      description: "O cara que apareceu na faceit",
      color: "text-red-400",
      image: memedzLogo
    },
    {
      name: "Diabo",
      role: "DPS",
      description: "É o Diabo sla mn",
      color: "text-red-400",
      image: diaboLogo
    },
    {
      name: "JoJoMachine",
      role: "Support",
      description: "A Artista do Time",
      color: "text-green-400",
      image: jojoLogo
    },
    {
      name: "Senna",
      role: "Support",
      description: "Ele ainda não sabe que é flex",
      color: "text-green-400",
      image: sennaLogo
    },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Tank':
        return 'border-blue-500 bg-blue-500/10';
      case 'DPS':
        return 'border-red-500 bg-red-500/10';
      case 'Support':
        return 'border-green-500 bg-green-500/10';
      case 'Flex':
        return 'border-purple-500 bg-purple-500/10';
      default:
        return 'border-primary bg-primary/10';
    }
  };

  return (
    <section id="players" className="py-20 space-pattern">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Nossos Jogadores</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os membros talentosos que compõem o time Lua Cheia
          </p>
        </div>

        {/* Grid de Jogadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => {
            return (
              <div 
                key={index}
                className={`player-card rounded-xl p-6 text-center group ${getRoleColor(player.role)}`}
              >
                {/* Imagem do Jogador */}
                <div className="mb-4 flex justify-center">
                  <img 
                    src={player.image} 
                    alt={player.name} 
                    className="w-24 h-24 rounded-full object-cover glow-effect group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Nome do Jogador */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {player.name}
                </h3>

                {/* Role */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${player.color} bg-card`}>
                    {player.role}
                  </span>
                </div>

                {/* Descrição */}
                <p className="text-muted-foreground text-sm">
                  {player.description}
                </p>

                {/* Estatísticas ou informações adicionais */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
                    <span>Ativo</span>
                    <span>•</span>
                    <span>Competitivo</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informações Adicionais */}
        {/* <div className="mt-16 text-center">
          <div className="bg-card/50 rounded-xl p-8 backdrop-blur-sm border border-border">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Junte-se ao Time
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre em busca de novos talentos. Se você tem paixão pelo Overwatch 2 
              e quer fazer parte de uma equipe competitiva, entre em contato conosco!
            </p>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105">
              Candidatar-se
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PlayersSection;