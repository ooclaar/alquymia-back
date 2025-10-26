# CTFd Alquymia - Documentação de Customização

## 📋 Visão Geral

Este documento descreve todas as customizações realizadas no CTFd para criar o tema **Alquymia**, uma plataforma de CTF (Capture The Flag) com design moderno, profissional e focado em segurança cibernética.

## 🎨 Tema Alquymia

O tema Alquymia foi desenvolvido com as seguintes características:

### Identidade Visual
- **Cores principais**: Laranja (#FF8C00, #FFA500) e preto/cinza escuro
- **Fontes**: 
  - Orbitron (títulos e elementos de destaque)
  - Rajdhani (texto corpo e elementos secundários)
- **Estilo**: Futurista, cyberpunk, com elementos de tecnologia e segurança

### Componentes Customizados

#### 1. Landing Page (index.html)
- **Hero Section**: Apresentação principal com animações
- **Seção Sobre**: Descrição da comunidade com terminal visual
- **Categorias de Desafios**: Cards com ícones para cada categoria
- **Footer**: Links rápidos e redes sociais

#### 2. Página de Desafios (challenges.html)
- **Hero com Estatísticas**: Badge 4ª Edição, título e stats (18+ desafios, 6 categorias, 3850+ pontos)
- **Grid de Desafios**: Cards organizados por categoria com:
  - Badge de categoria (colorido por tipo)
  - Badge de dificuldade (FÁCIL, MÉDIO, DIFÍCIL)
  - Título do desafio
  - Descrição truncada
  - Pontuação e número de resoluções
  - Badge "✓ Resolvido" para desafios completados
- **Categorias**:
  - MISC (amarelo/dourado)
  - Criptografia (roxo)
  - Forense (laranja/vermelho)
  - Web (azul/ciano)
  - Esteganografia (rosa/magenta)
  - Reverse (verde)

#### 3. Modal de Desafio (challenge.html)
- **Abas**: Challenge, Submissões, Solves
- **Informações do Desafio**:
  - Nome e pontuação
  - Tags/categorias
  - Descrição completa
  - Arquivos para download
  - Dicas (hints) expansíveis
- **Formulário de Submissão**:
  - Campo de input para flag
  - Botão Submit estilizado
  - Feedback visual (correto/incorreto)

#### 4. Página de Classificação (scoreboard.html)
- Hero com título e subtítulo
- Tabela de ranking (vazia quando não há resoluções)
- Mensagem de estado vazio

#### 5. Página de Equipes (teams.html)
- Hero com título e subtítulo
- Tabela de equipes com colunas: Equipe, Site, Afiliação, País

## 🛠️ Arquivos Modificados

### Templates
```
CTFd/themes/alquymia/templates/
├── base.html              # Template base com scripts do CTFd
├── index.html             # Landing page customizada
├── challenges.html        # Página de desafios com grid
├── challenge.html         # Modal de detalhes do desafio
├── scoreboard.html        # Página de classificação
└── teams.html             # Página de equipes
```

### Estilos
```
CTFd/themes/alquymia/static/css/
├── styles.css             # Estilos principais do tema
└── footer-fix.css         # Correções específicas do footer
```

### Estrutura de Diretórios
```
CTFd/themes/alquymia/
├── static/
│   ├── css/
│   │   ├── styles.css
│   │   └── footer-fix.css
│   ├── img/
│   ├── js/
│   └── logos/
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── challenges.html
│   ├── challenge.html
│   ├── scoreboard.html
│   └── teams.html
├── README.md
└── theme.json
```

## 🔧 Correções Implementadas

### Problema 1: Desafios não sendo exibidos
**Causa**: Scripts do CTFd (Alpine.js e challenges.js) não estavam sendo carregados no template base.

**Solução**: Adicionado no `base.html`:
```html
{{ Assets.js("assets/js/page.js") }}
```

### Problema 2: Componente ChallengeBoard não disponível
**Causa**: O tema estava tentando usar um componente customizado em vez do componente nativo do CTFd.

**Solução**: Atualizado `challenges.html` para usar o componente `ChallengeBoard` nativo do CTFd:
```html
<div x-data="ChallengeBoard" 
     @load-challenges.window="loadChallenges()" 
     @load-challenge.window="loadChallenge($event.detail)">
```

### Problema 3: Modal de desafio sem estilo
**Causa**: Estilos CSS não estavam sendo aplicados ao modal renderizado dinamicamente.

**Solução**: Adicionados estilos globais com `!important` no `styles.css` para garantir que sejam aplicados ao modal.

## 📊 Funcionalidades Testadas

### ✅ Funcionalidades Implementadas e Testadas

1. **Navegação**
   - ✅ Menu de navegação funcional em todas as páginas
   - ✅ Links para Início, Desafios, Classificação, Equipes, Perfil
   - ✅ Logout funcional

2. **Landing Page**
   - ✅ Hero section com animações
   - ✅ Seção "Quem Somos" com terminal visual
   - ✅ Seção de categorias com 6 cards
   - ✅ Footer com links e redes sociais

3. **Página de Desafios**
   - ✅ Exibição de todos os 18 desafios
   - ✅ Organização por categoria (6 categorias)
   - ✅ Cards com informações completas
   - ✅ Badges de categoria e dificuldade
   - ✅ Hover effects nos cards

4. **Modal de Desafio**
   - ✅ Abertura do modal ao clicar no desafio
   - ✅ Exibição de informações completas
   - ✅ Campo de input para flag
   - ✅ Botão Submit funcional
   - ✅ Feedback de submissão (correto/incorreto)
   - ✅ Abas para Challenge, Submissões e Solves
   - ✅ Download de arquivos

5. **Página de Classificação**
   - ✅ Hero section estilizado
   - ✅ Mensagem de estado vazio
   - ✅ Preparado para exibir ranking

6. **Página de Equipes**
   - ✅ Hero section estilizado
   - ✅ Tabela de equipes
   - ✅ Colunas: Equipe, Site, Afiliação, País

## 🎯 Desafios Cadastrados

Total: **18 desafios** divididos em **6 categorias**

### MISC (3 desafios)
1. QR Code Escondido - 50 pontos (FÁCIL)
2. Desafio de Lógica - 100 pontos (FÁCIL)
3. OSINT Challenge - 350 pontos (DIFÍCIL)

### Criptografia (3 desafios)
1. Cifra Básica - 100 pontos (FÁCIL)
2. Hash Reverso - 150 pontos (FÁCIL)
3. RSA Quebrado - 250 pontos (MÉDIO)

### Forense (3 desafios)
1. Metadados Ocultos - 100 pontos (FÁCIL)
2. Recuperação de Arquivo - 250 pontos (MÉDIO)
3. Análise de Memória - 400 pontos (DIFÍCIL)

### Web (3 desafios)
1. Cookie Manipulation - 150 pontos (FÁCIL)
2. Injeção SQL Básica - 200 pontos (MÉDIO)
3. XSS Refletido - 300 pontos (MÉDIO)

### Esteganografia (3 desafios)
1. Steghide Challenge - 150 pontos (FÁCIL)
2. LSB Oculto - 200 pontos (MÉDIO)
3. Áudio Secreto - 250 pontos (MÉDIO)

### Reverse (3 desafios)
1. Crackme Básico - 200 pontos (MÉDIO)
2. Ofuscação Python - 300 pontos (MÉDIO)
3. Anti-Debug - 500 pontos (DIFÍCIL)

**Total de Pontos**: 3850+

## 🚀 Como Usar

### Iniciar o CTFd

```bash
cd /home/ubuntu/CTFd
python3 serve.py
```

O servidor estará disponível em: `http://localhost:8000`

### Credenciais de Admin

- **Usuário**: admin
- **Senha**: admin123

### Acessar o Tema

O tema Alquymia é aplicado automaticamente. Para mudar o tema:

1. Acesse o painel admin: `/admin`
2. Vá em "Config" → "Theme"
3. Selecione "alquymia"

## 📝 Notas Técnicas

### Alpine.js
O CTFd usa Alpine.js para componentes reativos. Os principais componentes usados são:
- `ChallengeBoard`: Gerencia a lista de desafios
- `Challenge`: Gerencia o modal de desafio individual
- `Hint`: Gerencia as dicas dos desafios

### API do CTFd
O tema consome as seguintes APIs:
- `/api/v1/challenges`: Lista de desafios
- `/api/v1/challenges/<id>`: Detalhes de um desafio
- `/api/v1/challenges/<id>/solves`: Resoluções de um desafio
- `/api/v1/challenges/<id>/attempts`: Tentativas de resolução

### Estilos CSS
Os estilos usam:
- Variáveis CSS para cores e espaçamentos
- Gradientes para efeitos visuais
- Animações CSS para transições suaves
- `!important` para sobrescrever estilos do Bootstrap quando necessário

## 🔮 Melhorias Futuras

1. **Filtros de Categoria**: Implementar filtros funcionais na página de desafios
2. **Animações**: Adicionar mais animações de entrada e transição
3. **Dark/Light Mode**: Implementar alternância de tema
4. **Gráficos**: Adicionar gráficos de progresso e estatísticas
5. **Responsividade**: Melhorar a responsividade para dispositivos móveis
6. **PWA**: Transformar em Progressive Web App
7. **Notificações**: Implementar sistema de notificações em tempo real

## 📄 Licença

Este tema é baseado no CTFd, que é licenciado sob Apache License 2.0.

## 👥 Créditos

- **Tema Alquymia**: Desenvolvido para a comunidade Alquymia
- **CTFd**: Framework base desenvolvido por Kevin Chung
- **Fontes**: Google Fonts (Orbitron, Rajdhani)
- **Ícones**: Font Awesome

---

**Data de Criação**: Outubro 2024  
**Última Atualização**: Outubro 2024  
**Versão**: 1.0.0

