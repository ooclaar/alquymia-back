# 🚀 Guia Rápido - CTFd Alquymia

## ⚡ Instalação Rápida (5 minutos)

### 1. Clone o Repositório

```bash
git clone https://github.com/ooclaar/alquymia-front.git
cd alquymia-front
```

### 2. Instale as Dependências

```bash
pip3 install -r requirements.txt
```

### 3. Inicie o Servidor

```bash
python3 serve.py
```

### 4. Acesse a Plataforma

Abra seu navegador em: **http://localhost:8000**

---

## 🔑 Credenciais Padrão

### Admin
- **Usuário**: `admin`
- **Senha**: `admin123`

⚠️ **IMPORTANTE**: Altere a senha após o primeiro login!

---

## 📁 Estrutura de Arquivos

```
CTFd/
├── CTFd/
│   └── themes/
│       └── alquymia/              # ← Tema customizado
│           ├── static/
│           │   └── css/
│           │       ├── styles.css        # Estilos principais
│           │       └── footer-fix.css    # Correções do footer
│           └── templates/
│               ├── base.html             # Template base
│               ├── index.html            # Landing page
│               ├── challenges.html       # Página de desafios
│               ├── challenge.html        # Modal de desafio
│               ├── scoreboard.html       # Classificação
│               └── teams.html            # Equipes
├── ALQUYMIA_CUSTOMIZATION.md     # Documentação técnica
├── README_ALQUYMIA.md            # README principal
├── CHANGELOG_ALQUYMIA.md         # Changelog
└── QUICK_START.md                # Este arquivo
```

---

## 🎯 Primeiros Passos

### 1. Fazer Login como Admin

1. Acesse http://localhost:8000/login
2. Use as credenciais de admin
3. Você será redirecionado para a página inicial

### 2. Acessar Painel Admin

1. Clique em "Admin Panel" no menu
2. Ou acesse diretamente: http://localhost:8000/admin

### 3. Verificar Desafios

1. Vá em "Challenges" no painel admin
2. Você verá os 18 desafios pré-cadastrados
3. Edite ou adicione novos desafios conforme necessário

### 4. Configurar o CTF

1. Vá em "Config" no painel admin
2. Configure:
   - Nome do CTF
   - Descrição
   - Data de início e fim
   - Modo de competição (individual/equipes)
   - Visibilidade (público/privado)

---

## 👥 Criar Usuário de Teste

### Via Interface Web

1. Faça logout da conta admin
2. Clique em "Register"
3. Preencha o formulário
4. Faça login com o novo usuário

### Via Linha de Comando

```bash
# Entrar no shell do Flask
flask shell

# Criar usuário
from CTFd.models import Users, db
user = Users(
    name="teste",
    email="teste@example.com",
    password="senha123"
)
db.session.add(user)
db.session.commit()
exit()
```

---

## 🧪 Testar Funcionalidades

### 1. Visualizar Desafios

1. Acesse http://localhost:8000/challenges
2. Veja os 18 desafios organizados por categoria
3. Clique em um desafio para abrir o modal

### 2. Submeter uma Flag

1. Abra um desafio
2. Digite uma flag de teste: `flag{teste123}`
3. Clique em "Submit"
4. Veja o feedback "Incorrect"

### 3. Ver Classificação

1. Acesse http://localhost:8000/scoreboard
2. Veja a mensagem "O placar está vazio"
3. Após resolver desafios, o ranking aparecerá

### 4. Ver Equipes

1. Acesse http://localhost:8000/teams
2. Veja a lista de equipes (vazia inicialmente)

---

## 🔧 Configurações Importantes

### Alterar Senha do Admin

```bash
# Via linha de comando
flask shell

from CTFd.models import Users, db
admin = Users.query.filter_by(name='admin').first()
admin.password = 'nova_senha_segura'
db.session.commit()
exit()
```

### Alterar Tema

1. Acesse o painel admin
2. Vá em "Config" → "Theme"
3. Selecione "alquymia"
4. Clique em "Update"

### Configurar Email (Opcional)

Edite o arquivo `CTFd/config.py`:

```python
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USERNAME = 'seu_email@gmail.com'
MAIL_PASSWORD = 'sua_senha'
```

---

## 📊 Adicionar Novos Desafios

### Via Interface Web

1. Acesse o painel admin
2. Vá em "Challenges"
3. Clique em "Create Challenge"
4. Preencha:
   - Nome do desafio
   - Categoria
   - Descrição
   - Valor (pontos)
   - Flag
   - Arquivos (opcional)
   - Dicas (opcional)
5. Clique em "Create"

### Via Linha de Comando

```bash
flask shell

from CTFd.models import Challenges, Flags, Tags, db

# Criar desafio
challenge = Challenges(
    name="Novo Desafio",
    description="Descrição do desafio",
    value=100,
    category="Web",
    type="standard"
)
db.session.add(challenge)
db.session.flush()

# Adicionar flag
flag = Flags(
    challenge_id=challenge.id,
    content="flag{exemplo}",
    type="static"
)
db.session.add(flag)

# Adicionar tags
tag = Tags(
    challenge_id=challenge.id,
    value="web"
)
db.session.add(tag)

db.session.commit()
exit()
```

---

## 🐳 Deploy com Docker (Opcional)

### 1. Build da Imagem

```bash
docker build -t ctfd-alquymia .
```

### 2. Executar Container

```bash
docker run -d \
  -p 8000:8000 \
  --name ctfd \
  ctfd-alquymia
```

### 3. Acessar

Abra http://localhost:8000

---

## 🔒 Segurança

### Checklist de Segurança

- [ ] Alterar senha do admin
- [ ] Configurar SECRET_KEY único
- [ ] Habilitar HTTPS em produção
- [ ] Configurar rate limiting
- [ ] Fazer backup regular do banco de dados
- [ ] Atualizar dependências regularmente
- [ ] Monitorar logs de acesso

### Configurar SECRET_KEY

Edite `CTFd/config.py`:

```python
import os
SECRET_KEY = os.urandom(32)
```

---

## 📝 Comandos Úteis

### Backup do Banco de Dados

```bash
# SQLite (desenvolvimento)
cp CTFd/ctfd.db CTFd/ctfd.db.backup

# MySQL (produção)
mysqldump -u usuario -p ctfd > backup.sql
```

### Limpar Cache

```bash
rm -rf CTFd/__pycache__
rm -rf CTFd/*/__pycache__
```

### Ver Logs

```bash
tail -f CTFd/logs/ctfd.log
```

### Resetar Banco de Dados

⚠️ **CUIDADO**: Isso apagará todos os dados!

```bash
rm CTFd/ctfd.db
python3 serve.py
```

---

## 🆘 Resolução de Problemas

### Problema: Porta 8000 já em uso

**Solução**: Altere a porta no comando:

```bash
python3 serve.py --port 8080
```

### Problema: Dependências não instaladas

**Solução**: Instale novamente:

```bash
pip3 install --upgrade -r requirements.txt
```

### Problema: Tema não aparece

**Solução**: Limpe o cache e reinicie:

```bash
rm -rf CTFd/__pycache__
python3 serve.py
```

### Problema: Desafios não carregam

**Solução**: Verifique se os scripts estão carregando:

1. Abra o console do navegador (F12)
2. Veja se há erros JavaScript
3. Verifique se `Alpine is not defined`
4. Se sim, verifique se `base.html` tem `{{ Assets.js("assets/js/page.js") }}`

---

## 📚 Documentação Adicional

- **Documentação Técnica**: [ALQUYMIA_CUSTOMIZATION.md](./ALQUYMIA_CUSTOMIZATION.md)
- **README Principal**: [README_ALQUYMIA.md](./README_ALQUYMIA.md)
- **Changelog**: [CHANGELOG_ALQUYMIA.md](./CHANGELOG_ALQUYMIA.md)
- **CTFd Oficial**: https://docs.ctfd.io/

---

## 💬 Suporte

### Comunidade Alquymia
- **Discord**: https://discord.gg/alquymia
- **Twitter**: @AlquymiaCTF
- **Email**: suporte@alquymia.com

### CTFd Oficial
- **Documentação**: https://docs.ctfd.io/
- **GitHub**: https://github.com/CTFd/CTFd
- **Discord**: https://discord.gg/ctfd

---

## ✅ Checklist de Instalação

- [ ] Repositório clonado
- [ ] Dependências instaladas
- [ ] Servidor iniciado
- [ ] Acesso via navegador funcionando
- [ ] Login como admin realizado
- [ ] Senha do admin alterada
- [ ] Desafios verificados
- [ ] Tema Alquymia ativo
- [ ] Usuário de teste criado
- [ ] Funcionalidades testadas

---

**Tempo estimado de instalação**: 5-10 minutos  
**Dificuldade**: Fácil  
**Pré-requisitos**: Python 3.8+, pip3, Git

---

<div align="center">

**Pronto para começar? Execute o servidor e divirta-se! 🚀**

Made with ❤️ by Alquymia Community

</div>

