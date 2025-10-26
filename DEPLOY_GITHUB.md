# 🚀 Guia de Deploy para GitHub - CTFd Alquymia

## 📋 Pré-requisitos

- [x] Git instalado
- [x] Conta no GitHub
- [x] Repositório GitHub criado (ooclaar/alquymia-front)
- [x] Acesso ao repositório configurado

---

## 🔧 Configuração Inicial (Se necessário)

### 1. Configurar Git (primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

### 2. Verificar Repositório Remoto

```bash
cd /home/ubuntu/CTFd
git remote -v
```

**Saída esperada:**
```
origin  https://github.com/ooclaar/alquymia-front.git (fetch)
origin  https://github.com/ooclaar/alquymia-front.git (push)
```

---

## 📦 Fazer Commit das Alterações

### 1. Verificar Status

```bash
cd /home/ubuntu/CTFd
git status
```

Você verá os arquivos não rastreados:
- `ALQUYMIA_CUSTOMIZATION.md`
- `CHANGELOG_ALQUYMIA.md`
- `QUICK_START.md`
- `README_ALQUYMIA.md`
- `RESUMO_EXECUTIVO.md`
- `CTFd/themes/alquymia/`

### 2. Adicionar Arquivos ao Stage

```bash
# Adicionar todos os arquivos novos
git add .

# OU adicionar arquivos específicos
git add ALQUYMIA_CUSTOMIZATION.md
git add CHANGELOG_ALQUYMIA.md
git add QUICK_START.md
git add README_ALQUYMIA.md
git add RESUMO_EXECUTIVO.md
git add DEPLOY_GITHUB.md
git add CTFd/themes/alquymia/
```

### 3. Verificar Arquivos Adicionados

```bash
git status
```

**Saída esperada:**
```
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   ALQUYMIA_CUSTOMIZATION.md
        new file:   CHANGELOG_ALQUYMIA.md
        new file:   QUICK_START.md
        new file:   README_ALQUYMIA.md
        new file:   RESUMO_EXECUTIVO.md
        new file:   DEPLOY_GITHUB.md
        new file:   CTFd/themes/alquymia/...
```

### 4. Fazer Commit

```bash
git commit -m "feat: Implementar tema Alquymia completo para CTFd

- Adicionar tema customizado Alquymia
- Corrigir exibição de desafios na página de challenges
- Implementar modal de detalhes do desafio
- Adicionar páginas de classificação e equipes
- Criar documentação completa do projeto
- Adicionar 18 desafios em 6 categorias

Closes #1"
```

---

## 🌐 Fazer Push para o GitHub

### Opção 1: Push Direto (Recomendado)

```bash
git push origin master
```

### Opção 2: Push para Nova Branch

```bash
# Criar e mudar para nova branch
git checkout -b feature/tema-alquymia

# Fazer push da nova branch
git push origin feature/tema-alquymia
```

---

## 🔐 Autenticação no GitHub

### Se usar HTTPS

Você será solicitado a inserir suas credenciais:

```
Username: seu-usuario
Password: seu-token-pessoal
```

⚠️ **IMPORTANTE**: Desde 2021, o GitHub não aceita mais senhas. Use um **Personal Access Token**.

#### Criar Personal Access Token

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Dê um nome: "CTFd Alquymia"
4. Selecione os escopos:
   - [x] repo (todos)
   - [x] workflow
5. Clique em "Generate token"
6. **COPIE O TOKEN** (você não verá novamente!)

#### Usar o Token

```bash
# Quando solicitado, use:
Username: seu-usuario
Password: ghp_seu_token_aqui
```

### Se usar SSH

```bash
# Verificar se tem chave SSH
ls -la ~/.ssh

# Se não tiver, criar uma
ssh-keygen -t ed25519 -C "seu.email@example.com"

# Adicionar ao ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub

# Adicionar no GitHub:
# https://github.com/settings/keys
```

---

## ✅ Verificar Push

### 1. Verificar no Terminal

```bash
git log --oneline -1
```

**Saída esperada:**
```
abc1234 feat: Implementar tema Alquymia completo para CTFd
```

### 2. Verificar no GitHub

Acesse: https://github.com/ooclaar/alquymia-front

Você deve ver:
- ✅ Commit mais recente
- ✅ Arquivos novos no repositório
- ✅ Pasta `CTFd/themes/alquymia/`
- ✅ Documentação (*.md)

---

## 📝 Comandos Úteis

### Ver Histórico de Commits

```bash
git log --oneline
```

### Ver Diferenças

```bash
git diff
```

### Ver Status

```bash
git status
```

### Ver Branches

```bash
git branch -a
```

### Mudar de Branch

```bash
git checkout nome-da-branch
```

### Criar Nova Branch

```bash
git checkout -b nome-da-nova-branch
```

### Atualizar do Remoto

```bash
git pull origin master
```

---

## 🔄 Workflow Completo

```bash
# 1. Verificar status
git status

# 2. Adicionar arquivos
git add .

# 3. Fazer commit
git commit -m "feat: sua mensagem aqui"

# 4. Fazer push
git push origin master

# 5. Verificar no GitHub
# Acesse https://github.com/ooclaar/alquymia-front
```

---

## 🎯 Estrutura de Commit Messages

### Formato

```
tipo(escopo): descrição curta

Descrição detalhada (opcional)

Closes #issue-number
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, espaços, etc
- `refactor`: Refatoração de código
- `test`: Adicionar testes
- `chore`: Tarefas de manutenção

### Exemplos

```bash
# Nova funcionalidade
git commit -m "feat: adicionar página de desafios"

# Correção de bug
git commit -m "fix: corrigir carregamento de desafios"

# Documentação
git commit -m "docs: adicionar README do tema Alquymia"

# Estilo
git commit -m "style: formatar CSS do tema"

# Refatoração
git commit -m "refactor: reorganizar templates"
```

---

## 🐛 Resolução de Problemas

### Problema: "Permission denied (publickey)"

**Solução**: Configure SSH ou use HTTPS com token.

```bash
# Mudar para HTTPS
git remote set-url origin https://github.com/ooclaar/alquymia-front.git
```

### Problema: "Updates were rejected"

**Solução**: Fazer pull antes de push.

```bash
git pull origin master --rebase
git push origin master
```

### Problema: "Merge conflict"

**Solução**: Resolver conflitos manualmente.

```bash
# Ver arquivos em conflito
git status

# Editar arquivos e resolver conflitos
# Depois:
git add .
git commit -m "fix: resolver conflitos de merge"
git push origin master
```

### Problema: "Token expirado"

**Solução**: Criar novo token no GitHub.

1. Acesse: https://github.com/settings/tokens
2. Gere novo token
3. Use o novo token ao fazer push

---

## 📊 Checklist de Deploy

- [ ] Código testado localmente
- [ ] Documentação atualizada
- [ ] Arquivos desnecessários removidos
- [ ] `.gitignore` configurado
- [ ] Commit message descritivo
- [ ] Push realizado com sucesso
- [ ] Verificado no GitHub
- [ ] README.md atualizado
- [ ] Issues fechadas (se aplicável)

---

## 🎉 Próximos Passos Após Deploy

### 1. Criar Release

```bash
# Criar tag
git tag -a v1.0.0 -m "Release 1.0.0 - Tema Alquymia"

# Push da tag
git push origin v1.0.0
```

### 2. Criar Release no GitHub

1. Acesse: https://github.com/ooclaar/alquymia-front/releases
2. Clique em "Create a new release"
3. Selecione a tag: v1.0.0
4. Título: "CTFd Alquymia v1.0.0"
5. Descrição: Copie do CHANGELOG_ALQUYMIA.md
6. Clique em "Publish release"

### 3. Atualizar README Principal

Adicione badges no README:

```markdown
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-ready-success)
![CTFd](https://img.shields.io/badge/CTFd-3.7.0-orange)
```

### 4. Criar GitHub Pages (Opcional)

Para documentação online:

1. Acesse: Settings → Pages
2. Source: Deploy from a branch
3. Branch: master → /docs
4. Save

---

## 📞 Suporte

### GitHub
- **Repositório**: https://github.com/ooclaar/alquymia-front
- **Issues**: https://github.com/ooclaar/alquymia-front/issues
- **Pull Requests**: https://github.com/ooclaar/alquymia-front/pulls

### Comunidade
- **Discord**: https://discord.gg/alquymia
- **Twitter**: @AlquymiaCTF

---

## 📚 Referências

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Docs**: https://docs.github.com
- **Conventional Commits**: https://www.conventionalcommits.org

---

<div align="center">

**Pronto para fazer deploy! 🚀**

Made with ❤️ by Alquymia Community

</div>

