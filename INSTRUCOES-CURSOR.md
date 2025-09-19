# 🚀 Instruções para Cursor + GitHub

## 📋 Como Fazer Push pelo Cursor

### **Método 1: Painel Git do Cursor**

1. **Abrir painel Git** no Cursor:
   - Pressione `Ctrl/Cmd + Shift + G`
   - Ou clique no ícone Git na barra lateral

2. **Inicializar repositório**:
   - Clique em "Initialize Repository"
   - Ou use o comando: `git init`

3. **Adicionar arquivos**:
   - Clique no "+" ao lado dos arquivos
   - Ou use: `git add .`

4. **Fazer commit**:
   - Digite a mensagem: "feat: MVP completo do Entrelinhas"
   - Clique em "Commit"

5. **Conectar ao GitHub**:
   - Clique em "Publish to GitHub"
   - Ou use: `git remote add origin https://github.com/CassioNunes77/entrelinhas.core.git`

6. **Fazer push**:
   - Clique em "Push"
   - Ou use: `git push -u origin main`

### **Método 2: Terminal Integrado**

1. **Abrir terminal** no Cursor (`Ctrl/Cmd + ``)

2. **Executar comandos**:
   ```bash
   git init
   git config user.name "CassioNunes77"
   git config user.email "cassio@entrelinhas.app"
   git add .
   git commit -m "feat: MVP completo do Entrelinhas"
   git remote add origin https://github.com/CassioNunes77/entrelinhas.core.git
   git branch -M main
   git push -u origin main
   ```

### **Método 3: Extensão GitHub**

1. **Instalar extensão GitHub** no Cursor
2. **Fazer login** com sua conta
3. **Publicar repositório** diretamente

## 🎯 Arquivos Prontos

- ✅ **web/** - App React completo
- ✅ **mobile/** - Estrutura React Native
- ✅ **shared/** - Código compartilhado
- ✅ **README.md** - Documentação
- ✅ **SETUP.md** - Instruções
- ✅ **DEMO.md** - Demonstração

## 🚀 Resultado

Após o push, seu repositório GitHub terá o projeto completo do Entrelinhas!

**Recomendo usar o Método 1 (Painel Git) por ser mais visual e fácil.**

