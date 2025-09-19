# 🎬 Demonstração do Entrelinhas

## 🌟 Funcionalidades Implementadas

### 1. 🏠 Tela Inicial
- **Header acolhedor** com logo e tagline
- **Pergunta do Dia** em destaque com gradiente roxo
- **Feed de postagens** com interações sutis
- **Navegação inferior** com 4 abas principais

### 2. 💭 Pergunta do Dia
- Design em cartão com gradiente suave
- Botão "Responder" com animação hover
- Contadores discretos de apoios e respostas
- Estimula conversas profundas e reflexivas

### 3. 📝 Postagens
- **Avatars com iniciais** (sem pressão estética)
- **Conteúdo centralizado** (foco na mensagem)
- **Interações sutis**: "Apoiar" e "Comentar"
- **Timestamps** discretos
- **Animações suaves** ao carregar

### 4. 👂 Espaço de Escuta
- **Fundo lilás claro** (atmosfera silenciosa)
- **Botão "Ouvir"** com ícone de ouvido
- **Indicador de status** "Alguém está ouvindo"
- **Botão "Apoiar"** para dar suporte
- **Animações de entrada** escalonadas

### 5. 📖 Diário Pessoal
- **Fundo amarelo suave** (inspiração)
- **Botão "Escrever no Diário"** expansível
- **Textarea** para reflexões
- **Entradas de inspiração** destacadas
- **Botão de apoio** discreto

### 6. 👤 Perfil
- **Placeholder** para futuras funcionalidades
- **Design consistente** com o resto do app
- **Mensagem explicativa** sobre próximas features

## 🎨 Design System

### Paleta de Cores
```css
Roxo Principal: #7E57C2 (acolhimento)
Roxo Claro: #EDE7F6 (suavidade)
Verde Apoio: #81C784 (confirmação)
Amarelo Inspiração: #FFD54F (motivação)
```

### Tipografia
- **Fonte**: Inter (humanista e amigável)
- **Pesos**: Regular, Medium, Semibold
- **Tamanhos**: Confortáveis para leitura

### Microinterações
- **Hover**: Scale 1.05 (botões)
- **Tap**: Scale 0.95 (feedback tátil)
- **Fade In**: Entrada suave dos elementos
- **Slide**: Transições entre abas

## 📱 Responsividade

### Mobile First
- **Max-width**: 448px (iPhone Pro Max)
- **Padding**: 16px nas laterais
- **Bottom Navigation**: Fixa na parte inferior
- **Safe Areas**: Suporte para notch e home indicator

### Breakpoints
- **Mobile**: < 768px (padrão)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

### Otimizações
- **Lazy Loading**: Componentes carregados sob demanda
- **AnimatePresence**: Transições suaves entre telas
- **Memo**: Componentes otimizados
- **Bundle Size**: Dependências mínimas

### Animações
- **Framer Motion**: 60fps nativo
- **GPU Acceleration**: Transform3d
- **Reduced Motion**: Respeita preferências do usuário

## 🎯 Experiência do Usuário

### Princípios
1. **Silêncio**: Design não compete com a mensagem
2. **Acolhimento**: Cores suaves e tipografia amigável
3. **Autenticidade**: Foco no conteúdo, não em métricas
4. **Profundidade**: Espaços para reflexão e escuta

### Fluxo de Navegação
1. **Entrada**: Tela inicial com pergunta do dia
2. **Exploração**: Navegação por abas
3. **Interação**: Apoios e comentários sutis
4. **Reflexão**: Diário pessoal
5. **Conexão**: Espaço de escuta

## 🔮 Próximas Funcionalidades

### Backend
- [ ] API REST com Node.js
- [ ] Banco de dados PostgreSQL
- [ ] Autenticação JWT
- [ ] WebSocket para tempo real

### Mobile
- [ ] App React Native
- [ ] Push notifications
- [ ] Integração com câmera
- [ ] Modo offline

### Features
- [ ] Mensagens com delay
- [ ] Níveis de confiança
- [ ] Partilhas anônimas
- [ ] Sistema de recomendações

---

**Entrelinhas** - Onde as palavras encontram o silêncio. 💜
