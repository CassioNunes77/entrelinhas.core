# 🚀 Como Executar o Entrelinhas

## ⚠️ Problema de Permissões

Se você encontrar erros de permissão ao tentar instalar as dependências, execute os seguintes comandos:

### 1. Corrigir Permissões do NPM
```bash
sudo chown -R $(whoami) ~/.npm
```

### 2. Limpar Cache do NPM
```bash
npm cache clean --force
```

### 3. Instalar Dependências
```bash
cd web
npm install
```

### 4. Executar o Projeto
```bash
npm start
```

## 🔄 Alternativa com Vite

Se o Create React App continuar com problemas, use o Vite (mais rápido):

```bash
# Renomear package.json para usar Vite
cd web
mv package.json package-cra.json
mv package-vite.json package.json

# Instalar dependências
npm install

# Executar projeto
npm run dev
```

## 🔄 Alternativa com Yarn

Se o npm continuar com problemas, use o Yarn:

```bash
# Instalar Yarn globalmente
npm install -g yarn

# Instalar dependências
cd web
yarn install

# Executar projeto
yarn start
```

## 🌐 Acessar o App

Após executar `npm start` ou `yarn start`, abra seu navegador em:
**http://localhost:3000**

## 📱 Testar no Mobile

Para testar a responsividade no mobile:
1. Abra as ferramentas de desenvolvedor (F12)
2. Clique no ícone de dispositivo móvel
3. Selecione um dispositivo móvel (iPhone, Android, etc.)

## 🎨 Funcionalidades Disponíveis

- ✅ **Pergunta do Dia** - Estimula conversas profundas
- ✅ **Postagens** - Compartilhamento de pensamentos
- ✅ **Espaço de Escuta** - Conexão através da escuta
- ✅ **Diário Pessoal** - Reflexões e inspirações
- ✅ **Design Responsivo** - Otimizado para mobile
- ✅ **Animações Sutis** - Microinterações com Framer Motion

## 🛠️ Tecnologias Utilizadas

- **React 18** + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** (animações)
- **Radix UI** (acessibilidade)
- **Lucide React** (ícones)

## 📁 Estrutura do Projeto

```
entrelinhas.core/
├── web/                 # Aplicação web (MVP)
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── lib/        # Utilitários
│   │   └── App.tsx     # Componente principal
│   ├── public/         # Arquivos públicos
│   └── package.json    # Dependências
├── mobile/             # App mobile (futuro)
└── shared/             # Código compartilhado (futuro)
```

## 🎯 Próximos Passos

1. **Backend API** - Node.js + Express
2. **Banco de Dados** - PostgreSQL
3. **Autenticação** - JWT + OAuth
4. **App Mobile** - React Native
5. **Push Notifications** - Firebase

---

**Entrelinhas** - Conectando pessoas através da escuta e da autenticidade. 💜
