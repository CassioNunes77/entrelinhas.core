# Entrelinhas

> "Um lugar para conversar sobre o que importa. Sem likes. Sem pressão. Só você, suas palavras e quem estiver pronto para escutar."

## 🌟 Sobre o Projeto

Entrelinhas é um app de socialização silenciosa (Soft Community) que foge do padrão das redes sociais tradicionais. Valorizamos conexões mais profundas, silenciosas e significativas, com menos ruído, menos vaidade e mais autenticidade.

## 🎯 Conceito

Apps de socialização silenciosa são uma tendência crescente que priorizam:
- **Conexões profundas** em vez de likes superficiais
- **Autenticidade** em vez de vaidade
- **Escuta** em vez de apenas resposta
- **Reflexão** em vez de consumo rápido

## 🚀 Funcionalidades

### ✨ Recursos Principais
- **Avatar ou desenho** em vez de foto
- **Perguntas diárias** para estimular conversas
- **Sala de partilhas anônimas**
- **Mensagens com tempo diferido** (ex: só chega depois de 1h)
- **Espaço de escuta** - você pode "ouvir alguém" que só quer desabafar
- **Diário pessoal** com frases inspiradoras anonimizadas
- **Nível de confiança** baseado na consistência das interações

### 🎨 Design
- **Paleta suave** baseada em roxo degradê
- **Tipografia acolhedora** (Inter)
- **Microinterações sutis** com Framer Motion
- **Design responsivo** otimizado para mobile
- **Atmosfera de refúgio digital**

## 📱 Plataformas

### 🌐 Web (MVP Atual)
- **React 18** + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** para animações
- **Design responsivo** mobile-first

### 📱 Mobile (Futuro)
- **React Native** para iOS e Android
- **Expo** para desenvolvimento
- **Animações nativas** com Reanimated

## 🏗️ Arquitetura

```
entrelinhas.core/
├── web/           # Aplicação web (React)
├── mobile/        # Aplicação mobile (React Native)
└── shared/        # Código compartilhado
```

## 🚀 Como Executar

### Web App
```bash
cd web
npm install
npm start
```

Abra [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Paleta de Cores
```css
primary: {
  100: "#EDE7F6",  // Roxo muito claro
  200: "#D1C4E9",  // Roxo claro
  300: "#B39DDB",  // Roxo médio
  400: "#9575CD",  // Roxo
  500: "#7E57C2",  // Principal
  600: "#673AB7",  // Destaque
  700: "#5E35B1",  // Roxo escuro
}

accent: {
  green: "#81C784",   // Apoio
  yellow: "#FFD54F",  // Inspiração
  red: "#E57373",     // Alertas suaves
}
```

### Tipografia
- **Fonte**: Inter (humanista e amigável)
- **Pesos**: Regular, Medium, Bold
- **Tamanhos**: Confortáveis para leitura prolongada

## 🎯 Estratégia de Marketing

- **TikToks** com "desabafos reais"
- **Influenciadores** de saúde mental
- **Podcasts** sobre solidão e propósito
- **Campanha**: "Você escuta ou só responde?"

## 🛠️ Tecnologias

### Frontend
- **React 18** + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** (animações)
- **Radix UI** (acessibilidade)
- **Lucide React** (ícones)

### Backend (Futuro)
- **Node.js** + Express
- **PostgreSQL** + Prisma
- **Redis** (cache)
- **WebSocket** (tempo real)

## 📈 Roadmap

### ✅ MVP (Atual)
- [x] Interface web responsiva
- [x] Pergunta do dia
- [x] Postagens
- [x] Espaço de escuta
- [x] Diário pessoal
- [x] Design system completo

### 🔄 Próximos Passos
- [ ] Autenticação
- [ ] Backend API
- [ ] Banco de dados
- [ ] App mobile
- [ ] Push notifications
- [ ] Modo offline

## 🤝 Contribuição

Este é um projeto em desenvolvimento. Contribuições são bem-vindas!

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

---

**Entrelinhas** - Conectando pessoas através da escuta e da autenticidade. 💜
