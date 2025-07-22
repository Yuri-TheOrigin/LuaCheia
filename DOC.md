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