#!/bin/bash

echo "🚀 Configurando repositório Git e fazendo push para o GitHub..."

# Navegar para o diretório do projeto
cd /Users/Cassio/Documents/GitHub-CursorAI/entrelinhas.core

# Inicializar repositório Git
echo "📁 Inicializando repositório Git..."
git init

# Configurar usuário Git
echo "👤 Configurando usuário Git..."
git config user.name "CassioNunes77"
git config user.email "cassio@entrelinhas.app"

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos..."
git add .

# Fazer commit inicial
echo "💾 Fazendo commit..."
git commit -m "feat: MVP do Entrelinhas - App de socialização silenciosa

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
✅ Microinterações - Animações sutis com Framer Motion"

# Conectar ao repositório remoto do GitHub
echo "🔗 Conectando ao repositório GitHub..."
git remote add origin https://github.com/CassioNunes77/entrelinhas.core.git

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
