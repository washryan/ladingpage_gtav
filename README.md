# 🎮 GTA V Landing Page

Uma landing page moderna e responsiva para Grand Theft Auto V, desenvolvida com HTML5, SASS, jQuery e automatizada com Gulp.

## 🚀 Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais atraentes
- **FAQ Interativo**: Accordion com jQuery para perguntas frequentes
- **Scroll Suave**: Navegação fluida entre seções
- **Otimização de Performance**: Imagens minificadas e código otimizado
- **SEO Friendly**: Estrutura semântica e meta tags otimizadas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **SASS**: Pré-processador CSS com arquitetura modular
- **JavaScript Vanilla**: Interações e animações (sem dependências externas)
- **Gulp**: Automação de tarefas
- **Google Fonts**: Tipografia personalizada (Bebas Neue, Oswald, Roboto)

## 📁 Estrutura do Projeto

\`\`\`
gta-v-landing/
├── src/
│   ├── scss/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _base.scss
│   │   ├── _components.scss
│   │   ├── _sections.scss
│   │   ├── _responsive.scss
│   │   └── main.scss
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── [imagens do projeto]
│   └── index.html
├── dist/ (gerado automaticamente)
├── gulpfile.js
├── package.json
└── README.md
\`\`\`

## 🔧 Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/gta-v-landing.git
cd gta-v-landing
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Execute o projeto em modo desenvolvimento**
\`\`\`bash
npm run dev
\`\`\`

4. **Para build de produção**
\`\`\`bash
npm run build
\`\`\`

## 📜 Scripts Disponíveis

- \`npm run dev\`: Inicia o servidor de desenvolvimento com watch
- \`npm run build\`: Gera build otimizado para produção
- \`npm start\`: Inicia servidor local para visualizar o projeto

## 🎯 Funcionalidades do Gulp

### Tarefas Automatizadas

- **SASS Compilation**: Compila SCSS para CSS minificado
- **JavaScript Minification**: Minifica e concatena arquivos JS
- **HTML Minification**: Remove espaços e comentários desnecessários
- **Image Optimization**: Comprime imagens PNG, JPG, GIF e SVG
- **Auto-prefixing**: Adiciona prefixos CSS automaticamente
- **Source Maps**: Gera mapas para debugging
- **Live Reload**: Atualização automática do browser

### Comandos Gulp

\`\`\`bash
# Build completo
gulp build

# Modo desenvolvimento com watch
gulp dev

# Limpar pasta dist
gulp clean

# Apenas processar SCSS
gulp styles

# Apenas processar JavaScript
gulp scripts

# Apenas otimizar imagens
gulp images
\`\`\`

## 🌐 Deploy na Vercel

### Método 1: Via CLI da Vercel

1. **Instale a CLI da Vercel**
\`\`\`bash
npm i -g vercel
\`\`\`

2. **Faça login na Vercel**
\`\`\`bash
vercel login
\`\`\`

3. **Execute o build**
\`\`\`bash
npm run build
\`\`\`

4. **Deploy**
\`\`\`bash
vercel --prod
\`\`\`

### Método 2: Via GitHub (Recomendado)

1. **Faça push do código para o GitHub**
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Conecte o repositório na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe seu repositório do GitHub

3. **Configure o build**
   - Build Command: \`npm run build\`
   - Output Directory: \`dist\`
   - Install Command: \`npm install\`

## 🎨 Customização

### Cores e Temas

Edite o arquivo \`src/scss/_variables.scss\` para personalizar:

\`\`\`scss
$primary-color: #f0b90b;    // Cor principal (amarelo GTA)
$secondary-color: #1a1a1a;  // Cor secundária
$accent-color: #ff6b35;     // Cor de destaque
$text-color: #ffffff;       // Cor do texto
$bg-dark: #0a0a0a;         // Fundo escuro
\`\`\`

### Fontes

As fontes são carregadas do Google Fonts:
- **Bebas Neue**: Títulos principais
- **Oswald**: Subtítulos e navegação
- **Roboto**: Texto corpo

### Seções da Landing Page

1. **Hero**: Imagem de fundo com call-to-action
2. **Sobre**: Apresentação dos personagens e características
3. **Planos**: Diferentes edições do jogo
4. **Dispositivos**: Plataformas disponíveis
5. **FAQ**: Perguntas frequentes interativas
6. **Footer**: Links e informações adicionais

## 🔍 SEO e Performance

### Otimizações Implementadas

- Meta tags otimizadas
- Estrutura HTML semântica
- Lazy loading de imagens
- Minificação de assets
- Compressão de imagens
- Source maps para debugging
- Prefixos CSS automáticos

## 📱 Responsividade

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1200px

## 🐛 Troubleshooting

### Problemas Comuns

**Erro: "gulp command not found"**
\`\`\`bash
npm install -g gulp-cli
\`\`\`

**Erro de permissão no macOS/Linux**
\`\`\`bash
sudo npm install -g gulp-cli
\`\`\`

**Imagens não carregam**
- Verifique se as imagens estão na pasta \`src/images/\`
- Execute \`gulp images\` para processar as imagens

**SCSS não compila**
- Verifique a sintaxe nos arquivos SCSS
- Execute \`gulp styles\` para compilar apenas o CSS

## 📄 Licença

Este projeto é apenas para fins educacionais e demonstrativos. GTA V é propriedade da Rockstar Games.

---

**Desenvolvido com ❤️ para a comunidade GTA**
\`\`\`
