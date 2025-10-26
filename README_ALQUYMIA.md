# 🔥 CTFd Alquymia - Plataforma de CTF Customizada

<div align="center">

![Alquymia CTF](https://img.shields.io/badge/CTF-Alquymia-orange?style=for-the-badge)
![CTFd](https://img.shields.io/badge/CTFd-3.7.0-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Pronto-success?style=for-the-badge)

**Plataforma de Capture The Flag com design moderno e profissional**

[Documentação Completa](./ALQUYMIA_CUSTOMIZATION.md) • [CTFd Original](https://github.com/CTFd/CTFd)

</div>

---

## 📖 Sobre o Projeto

O **CTFd Alquymia** é uma customização completa da plataforma CTFd, desenvolvida especialmente para a comunidade Alquymia. O tema apresenta um design futurista e profissional, com foco em segurança cibernética e experiência do usuário.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface futurista com tema cyberpunk
- 🎯 **18 Desafios**: Divididos em 6 categorias diferentes
- 📊 **Sistema de Ranking**: Classificação em tempo real
- 👥 **Suporte a Equipes**: Competição individual ou em grupo
- 🔐 **Categorias Variadas**: Crypto, Web, Forense, Stego, Reverse, MISC
- 📱 **Responsivo**: Funciona em desktop, tablet e mobile
- ⚡ **Performance**: Carregamento rápido e otimizado

## 🚀 Início Rápido

### Pré-requisitos

- Python 3.8+
- pip3
- Git

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/CTFd.git
cd CTFd

# 2. Instale as dependências
pip3 install -r requirements.txt

# 3. Inicie o servidor
python3 serve.py
```

### Acesso

Abra seu navegador em: `http://localhost:8000`

**Credenciais de Admin:**
- Usuário: `admin`
- Senha: `admin123`

## 📸 Screenshots

### Landing Page
A página inicial apresenta o CTF com um design impactante e informações sobre a comunidade.

### Página de Desafios
Grid organizado com todos os desafios divididos por categoria, com badges coloridos e informações claras.

### Modal de Desafio
Interface limpa para visualizar detalhes do desafio, fazer download de arquivos e submeter flags.

### Classificação
Ranking em tempo real mostrando os melhores competidores.

## 🎯 Desafios Disponíveis

| Categoria | Quantidade | Pontos Totais |
|-----------|------------|---------------|
| MISC | 3 | 500 |
| Criptografia | 3 | 500 |
| Forense | 3 | 750 |
| Web | 3 | 650 |
| Esteganografia | 3 | 600 |
| Reverse | 3 | 1000 |
| **TOTAL** | **18** | **3850+** |

## 🛠️ Estrutura do Projeto

```
CTFd/
├── CTFd/
│   └── themes/
│       └── alquymia/           # Tema customizado
│           ├── static/
│           │   ├── css/
│           │   │   ├── styles.css
│           │   │   └── footer-fix.css
│           │   ├── img/
│           │   ├── js/
│           │   └── logos/
│           └── templates/
│               ├── base.html
│               ├── index.html
│               ├── challenges.html
│               ├── challenge.html
│               ├── scoreboard.html
│               └── teams.html
├── ALQUYMIA_CUSTOMIZATION.md   # Documentação técnica
└── README_ALQUYMIA.md          # Este arquivo
```

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Laranja Principal | `#FF8C00` | Títulos, botões, destaques |
| Laranja Claro | `#FFA500` | Gradientes, hover |
| Preto | `#0a0a0a` | Fundo principal |
| Cinza Escuro | `#1a1a1a` | Cards, containers |
| Cinza Médio | `#888888` | Texto secundário |
| Branco | `#e0e0e0` | Texto principal |

## 📚 Categorias de Desafios

### 🔐 Criptografia
Desafios envolvendo cifras, hashes e técnicas de criptoanálise.

### 🌐 Web Exploitation
Vulnerabilidades em aplicações web: SQL Injection, XSS, CSRF, etc.

### 🔍 Forense
Análise de evidências digitais, logs e recuperação de dados.

### 🖼️ Esteganografia
Mensagens ocultas em imagens, áudios e vídeos.

### ⚙️ Reverse Engineering
Análise de binários, decompilação e engenharia reversa.

### 🎯 MISC
Desafios diversos: OSINT, lógica, programação, etc.

## 🔧 Tecnologias Utilizadas

- **Backend**: Python 3, Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Framework CSS**: Bootstrap 5
- **JavaScript**: Alpine.js
- **Banco de Dados**: SQLite (desenvolvimento) / MySQL (produção)
- **Fontes**: Orbitron, Rajdhani (Google Fonts)
- **Ícones**: Font Awesome

## 📝 Funcionalidades

### Para Participantes
- ✅ Visualizar desafios por categoria
- ✅ Submeter flags e receber feedback
- ✅ Ver ranking em tempo real
- ✅ Formar ou entrar em equipes
- ✅ Visualizar histórico de submissões
- ✅ Baixar arquivos de desafios

### Para Administradores
- ✅ Criar e gerenciar desafios
- ✅ Configurar categorias e tags
- ✅ Gerenciar usuários e equipes
- ✅ Visualizar estatísticas
- ✅ Exportar dados
- ✅ Customizar configurações

## 🔒 Segurança

- Autenticação de usuários
- Proteção contra CSRF
- Rate limiting em submissões
- Validação de flags
- Logs de atividades
- Backup automático

## 📊 Estatísticas

- **Desafios**: 18
- **Categorias**: 6
- **Pontos Totais**: 3850+
- **Níveis de Dificuldade**: 3 (Fácil, Médio, Difícil)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é baseado no CTFd, que é licenciado sob Apache License 2.0.

## 👥 Equipe

- **Desenvolvimento**: Comunidade Alquymia
- **Design**: Tema Alquymia
- **Framework Base**: CTFd by Kevin Chung

## 📞 Contato

- **Website**: [alquymia.com](https://alquymia.com)
- **Discord**: [Alquymia Community](https://discord.gg/alquymia)
- **Twitter**: [@AlquymiaCTF](https://twitter.com/alquymia)

## 🙏 Agradecimentos

- CTFd Team pelo framework incrível
- Comunidade Alquymia pelo suporte
- Todos os contribuidores e participantes

---

<div align="center">

**Transformando vidas através do conhecimento em Cyber Segurança**

Made with ❤️ by Alquymia Community

</div>

