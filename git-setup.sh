#!/bin/bash

# Script para configurar Git e fazer commit do projeto Entrelinhas

echo "🚀 Configurando repositório Git para o Entrelinhas..."

# Inicializar repositório Git
git init

# Configurar usuário Git (substitua pelos seus dados)
git config user.name "Cassio"
git config user.email "cassio@example.com"

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
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

echo "✅ Commit realizado com sucesso!"

# Verificar se há um repositório remoto configurado
if git remote -v | grep -q origin; then
    echo "📤 Fazendo push para o repositório remoto..."
    git push -u origin main
else
    echo "⚠️  Nenhum repositório remoto configurado."
    echo "Para conectar ao GitHub, execute:"
    echo "git remote add origin https://github.com/SEU_USUARIO/entrelinhas.core.git"
    echo "git branch -M main"
    echo "git push -u origin main"
fi

echo "🎉 Projeto Entrelinhas pronto para uso!"
echo ""
echo "Para executar o projeto:"
echo "cd web"
echo "npm install"
echo "npm start"
echo ""
echo "Ou use o Vite (mais rápido):"
echo "cd web"
echo "mv package.json package-cra.json"
echo "mv package-vite.json package.json"
echo "npm install"
echo "npm run dev"
