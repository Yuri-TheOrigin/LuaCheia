# Website Lua Cheia - Time de Overwatch 2

Este é o website oficial do time de Overwatch 2 "Lua Cheia", desenvolvido com React, Tailwind CSS e componentes modernos.

## 🌙 Características

- **Design Escuro**: Tema inspirado na lua e no espaço com tons azulados e roxos
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Moderno**: Utiliza as mais recentes tecnologias web
- **Performático**: Otimizado para carregamento rápido
- **Acessível**: Cores com bom contraste e navegação intuitiva

## 🚀 Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interfaces de usuário
- **Vite**: Build tool rápido e moderno
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones modernos e limpos
- **shadcn/ui**: Componentes de UI de alta qualidade

## 📁 Estrutura do Projeto

```
lua-cheia-website/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   │   └── LUACHEIALOGO.png
│   ├── components/        # Componentes React
│   │   ├── callisto/
│   │   │   ├── CallistoHeader.jsx     # Cabeçalho com navegação
│   │   │   ├── CallistoHeroSection.jsx # Seção principal
│   │   │   └── CallistoPlayersSection.jsx # Seção de jogadores
│   │   ├── Header.jsx     # Cabeçalho com navegação
│   │   ├── HeroSection.jsx # Seção principal
│   │   ├── PlayersSection.jsx # Seção de jogadores
│   │   ├── NewsSection.jsx # Seção de notícias
│   │   ├── SocialSection.jsx # Redes sociais
│   │   └── Footer.jsx     # Rodapé
│   ├── pages/ 
│   │   ├── Callisto.jsx
│   │   └── Sobre.jsx
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Ponto de entrada
├── index.html            # HTML principal
├── package.json          # Dependências do projeto
├── README.md            # Este arquivo
└── vite.config.js
```

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm, npm ou yarn

### Instalação e Execução

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone [url-do-repositorio]
   cd lua-cheia-website
   ```

2. **Instale as dependências**:
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

4. **Acesse o site**:
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
pnpm run build
# ou
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🎨 Personalização

### Cores do Tema

As cores principais estão definidas no arquivo `src/App.css`:

- **Background Principal**: `#1A1A2E` (Roxo escuro/Azul marinho)
- **Cor Primária**: `#8E9BFF` (Azul claro da logo)
- **Cor Secundária**: `#A08AFF` (Roxo da logo)
- **Cards**: `#16213E` (Azul escuro)

### Modificando Conteúdo

#### Jogadores
Edite o array `players` em `src/components/PlayersSection.jsx`:

```javascript
const players = [
  {
    name: "NomeDoJogador",
    role: "Tank", // Tank, DPS, Support, Flex
    icon: Shield, // Ícone do Lucide React
    description: "Descrição do jogador",
    color: "text-blue-400" // Cor do ícone
  },
  // ... mais jogadores
];
```

#### Notícias
Edite o array `news` em `src/components/NewsSection.jsx`:

```javascript
const news = [
  {
    id: 1,
    title: "Título da Notícia",
    date: "Data da notícia",
    category: "Categoria",
    icon: Trophy, // Ícone do Lucide React
    excerpt: "Resumo da notícia...",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10 border-yellow-500/30"
  },
  // ... mais notícias
];
```

#### Redes Sociais
Edite o array `socialLinks` em `src/components/SocialSection.jsx`:

```javascript
const socialLinks = [
  {
    name: "Discord",
    icon: MessageCircle,
    url: "https://discord.gg/seuservidor", // Substitua pela URL real
    description: "Descrição da rede social",
    // ... outras propriedades
  },
  // ... mais redes sociais
];
```

## 🌐 Deploy

### GitHub Pages

1. Instale o pacote gh-pages:
   ```bash
   pnpm add -D gh-pages
   ```

2. Adicione os scripts no `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "pnpm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Execute o deploy:
   ```bash
   pnpm run deploy
   ```

### Vercel

1. Instale a CLI do Vercel:
   ```bash
   npm i -g vercel
   ```

2. Execute o deploy:
   ```bash
   vercel
   ```

### Netlify

1. Faça build do projeto:
   ```bash
   pnpm run build
   ```

2. Arraste a pasta `dist/` para o Netlify Deploy

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com grid de 3 colunas
- **Tablet**: Layout adaptado com grid de 2 colunas
- **Mobile**: Layout em coluna única com menu hambúrguer

## 🎯 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Menu responsivo para mobile
- ✅ Animações e efeitos hover
- ✅ Cards interativos para jogadores
- ✅ Seção de notícias organizada
- ✅ Links para redes sociais
- ✅ Footer informativo
- ✅ Design acessível

## 📞 Contato

Para dúvidas sobre o desenvolvimento ou modificações no site:

- Email: contato@luacheia.com
- Discord: Lua Cheia#1234

## 📄 Licença

Este projeto foi desenvolvido especificamente para o time Lua Cheia. Todos os direitos reservados.

---

**Overwatch 2** é uma marca registrada da Blizzard Entertainment, Inc. Este site não é afiliado oficialmente à Blizzard Entertainment.

