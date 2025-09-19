# 🔧 Como Resolver as Permissões

## 📋 Situação Atual

Você deletou o arquivo `index.html` que estava no repositório, e agora o diretório `.git` também foi removido. Precisamos recriar o repositório Git e fazer o push do projeto completo.

## ⚠️ Problema Identificado

O terminal está com restrições de permissão que impedem a execução de comandos Git. Aqui estão as soluções:

## 🛠️ Soluções

### **Opção 1: Executar Script Automático**

1. **Abrir Terminal** no diretório do projeto:
   ```bash
   cd /Users/Cassio/Documents/GitHub-CursorAI/entrelinhas.core
   ```

2. **Tornar o script executável**:
   ```bash
   chmod +x setup-git.sh
   ```

3. **Executar o script**:
   ```bash
   ./setup-git.sh
   ```

### **Opção 2: Comandos Manuais**

Execute estes comandos um por um:

```bash
# 1. Navegar para o diretório
cd /Users/Cassio/Documents/GitHub-CursorAI/entrelinhas.core

# 2. Inicializar Git
git init

# 3. Configurar usuário
git config user.name "CassioNunes77"
git config user.email "cassio@entrelinhas.app"

# 4. Adicionar todos os arquivos
git add .

# 5. Fazer commit
git commit -m "feat: MVP completo do Entrelinhas - App de socialização silenciosa

- Implementa design system completo com paleta roxo suave
- Cria funcionalidades principais: pergunta do dia, postagens, espaço de escuta, diário
- Adiciona microinterações sutis com Framer Motion
- Garante design responsivo mobile-first
- Prepara estrutura monorepo para web, mobile e shared
- Segue conceito de socialização silenciosa sem likes/pressão"

# 6. Conectar ao GitHub
git remote add origin https://github.com/CassioNunes77/entrelinhas.core.git

# 7. Configurar branch
git branch -M main

# 8. Fazer push
git push -u origin main
```

### **Opção 3: GitHub Desktop (Mais Fácil)**

1. **Abrir GitHub Desktop**
2. **File > Add Local Repository**
3. **Selecionar** `/Users/Cassio/Documents/GitHub-CursorAI/entrelinhas.core`
4. **Commit** com a mensagem acima
5. **Publish repository** (se necessário) ou **Push origin**

### **Opção 4: Corrigir Permissões do Sistema**

Se continuar com problemas de permissão:

```bash
# Corrigir permissões do NPM
sudo chown -R $(whoami) ~/.npm

# Corrigir permissões do diretório
sudo chown -R $(whoami) /Users/Cassio/Documents/GitHub-CursorAI/entrelinhas.core

# Limpar cache do NPM
npm cache clean --force
```

## 🎯 O que será enviado

### 📁 Estrutura Completa
```
entrelinhas.core/
├── web/                    # Aplicação React completa
│   ├── src/
│   │   ├── components/     # Todos os componentes
│   │   │   ├── ui/        # Componentes base (shadcn/ui)
│   │   │   ├── Header.tsx
│   │   │   ├── BottomNavigation.tsx
│   │   │   ├── QuestionOfTheDay.tsx
│   │   │   ├── PostCard.tsx
│   │   │   ├── ListenSpace.tsx
│   │   │   └── PersonalDiary.tsx
│   │   ├── lib/           # Utilitários
│   │   ├── App.tsx        # App principal
│   │   └── main.tsx       # Entry point
│   ├── public/            # Arquivos públicos
│   ├── package.json       # Dependências
│   ├── tailwind.config.js # Configuração Tailwind
│   └── vite.config.ts     # Configuração Vite
├── mobile/                # Preparado para React Native
├── shared/                # Código compartilhado
├── README.md              # Documentação principal
├── SETUP.md               # Instruções de instalação
├── DEMO.md                # Demonstração
├── .gitignore             # Arquivos ignorados
└── setup-git.sh           # Script de configuração
```

### 🎨 Funcionalidades
- ✅ **Pergunta do Dia** - Estimula conversas profundas
- ✅ **Postagens** - Compartilhamento de pensamentos
- ✅ **Espaço de Escuta** - Conexão através da escuta
- ✅ **Diário Pessoal** - Reflexões e inspirações
- ✅ **Design Responsivo** - Otimizado para mobile
- ✅ **Microinterações** - Animações sutis

## 🚀 Após o Push

### 1. Verificar no GitHub
Acesse [https://github.com/CassioNunes77/entrelinhas.core/](https://github.com/CassioNunes77/entrelinhas.core/) e veja todos os arquivos

### 2. Executar Localmente
```bash
cd web
npm install
npm start
```

### 3. Deploy (Opcional)
- **Vercel**: Conecte o repositório GitHub
- **Netlify**: Conecte o repositório GitHub
- **GitHub Pages**: Configure no repositório

## 🎉 Resultado Esperado

Após o push, seu repositório GitHub terá:
- ✅ **Todos os arquivos** do projeto completo
- ✅ **Estrutura monorepo** organizada
- ✅ **Documentação** completa
- ✅ **MVP funcional** do Entrelinhas

## 💜 Conceito Implementado

O Entrelinhas segue o conceito de **socialização silenciosa**:
- **Sem likes** - Apenas apoios sutis
- **Sem pressão** - Design acolhedor
- **Foco na mensagem** - Conteúdo em destaque
- **Conexões profundas** - Espaço de escuta
- **Autenticidade** - Avatars simples

---

**Execute os comandos acima e seu projeto estará no GitHub!** 🚀

