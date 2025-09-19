# Entrelinhas - Web App

Um lugar para conversar sobre o que importa. Sem likes. Sem pressão. Só você, suas palavras e quem estiver pronto para escutar.

## 🚀 Como executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

## 📱 Funcionalidades

- **Pergunta do Dia** - Estimula conversas profundas
- **Postagens** - Compartilhamento de pensamentos
- **Espaço de Escuta** - Conexão através da escuta
- **Diário Pessoal** - Reflexões e inspirações
- **Design Responsivo** - Otimizado para mobile

## 🎨 Design System

O app segue uma paleta de cores suaves baseada em roxo degradê, com foco na calma, introspecção e acolhimento. O design é clean, com microinterações sutis e tipografia acolhedora.

## 📦 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── Header.tsx      # Cabeçalho do app
│   ├── BottomNavigation.tsx # Navegação inferior
│   ├── QuestionOfTheDay.tsx # Pergunta do dia
│   ├── PostCard.tsx    # Card de postagem
│   ├── ListenSpace.tsx # Espaço de escuta
│   └── PersonalDiary.tsx # Diário pessoal
├── lib/                # Utilitários
└── App.tsx            # Componente principal
```
