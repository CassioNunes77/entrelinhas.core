#!/bin/bash

echo "🚀 Configurando Git e fazendo push para o GitHub..."

# Navegar para o diretório do projeto
cd /Users/Cassio/Documents/GitHub-CursorAI/entrelinhas.core

# Verificar se já existe um repositório Git
if [ -d ".git" ]; then
    echo "📁 Repositório Git já existe"
else
    echo "📁 Inicializando novo repositório Git..."
    git init
fi

# Configurar usuário Git
echo "👤 Configurando usuário Git..."
git config user.name "CassioNunes77"
git config user.email "cassio@entrelinhas.app"

# Adicionar todos os arquivos
echo "📦 Adicionando todos os arquivos..."
git add .

# Fazer commit inicial
echo "💾 Fazendo commit..."
git commit -m "feat: MVP completo do Entrelinhas - App de socialização silenciosa

- Implementa design system completo com paleta roxo suave
- Cria funcionalidades principais: pergunta do dia, postagens, espaço de escuta, diário
- Adiciona microinterações sutis com Framer Motion
- Garante design responsivo mobile-first
- Prepara estrutura monorepo para web, mobile e shared
- Segue conceito de socialização silenciosa sem likes/pressão

Funcionalidades implementadas:
✅ Pergunta do Dia - Estimula conversas profundas
✅ Postagens - Compartilhamento de pensamentos
✅ Espaço de Escuta - Conexão através da escuta
✅ Diário Pessoal - Reflexões e inspirações
✅ Design Responsivo - Otimizado para mobile
✅ Microinterações - Animações sutis com Framer Motion

Estrutura do projeto:
📁 web/ - Aplicação React completa
📁 mobile/ - Preparado para React Native
📁 shared/ - Código compartilhado
📄 README.md - Documentação principal
📄 SETUP.md - Instruções de instalação
📄 DEMO.md - Demonstração das funcionalidades"

# Verificar se já existe remote origin
if git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 Remote origin já configurado"
else
    echo "🔗 Conectando ao repositório GitHub..."
    git remote add origin https://github.com/CassioNunes77/entrelinhas.core.git
fi

# Renomear branch para main
echo "🌿 Configurando branch main..."
git branch -M main

# Fazer push para o GitHub
echo "📤 Fazendo push para o GitHub..."
git push -u origin main

echo "✅ Push realizado com sucesso!"
echo "🌐 Seu projeto está disponível em: https://github.com/CassioNunes77/entrelinhas.core"
echo ""
echo "🚀 Para executar o projeto localmente:"
echo "cd web"
echo "npm install"
echo "npm start"

