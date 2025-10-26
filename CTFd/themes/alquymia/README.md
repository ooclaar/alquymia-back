# Tema Alquymia para CTFd

Tema customizado baseado no design do CTF Alquymia 2025, com visual moderno e futurista.

## Características

- Design responsivo e moderno
- Animações de partículas no fundo
- Estilo cyberpunk/futurista
- Fontes customizadas (Orbitron e Rajdhani)
- Páginas customizadas:
  - Landing page (página inicial)
  - Login e Registro
  - Desafios
  - Scoreboard (Classificação)
  - Perfil e configurações

## Estrutura

```
alquymia/
├── static/
│   ├── css/
│   │   └── styles.css       # Estilos principais
│   ├── js/
│   │   ├── script.js        # Scripts principais
│   │   └── chart-init.js    # Inicialização de gráficos
│   ├── logos/               # Logos e marcas
│   └── img/                 # Imagens
├── templates/
│   ├── base.html            # Template base
│   ├── page.html            # Landing page
│   ├── login.html           # Página de login
│   ├── register.html        # Página de registro
│   ├── challenges.html      # Página de desafios
│   ├── scoreboard.html      # Página de classificação
│   ├── components/          # Componentes reutilizáveis
│   └── macros/              # Macros Jinja2
├── theme.json               # Configuração do tema
└── README.md                # Este arquivo
```

## Ativação

1. Acesse o painel de administração do CTFd
2. Vá em **Config** → **Theme**
3. Selecione "Alquymia" na lista de temas
4. Salve as alterações

## Customização

### Cores

As cores principais podem ser alteradas no arquivo `static/css/styles.css`:

- `--primary-color`: Cor primária (azul neon)
- `--secondary-color`: Cor secundária (roxo)
- `--accent-color`: Cor de destaque (ciano)

### Logos

Substitua os arquivos em `static/logos/` pelos seus próprios logos.

### Fontes

O tema usa as fontes Orbitron e Rajdhani do Google Fonts. Para alterar, edite o `base.html`.

## Compatibilidade

- CTFd 3.x
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Responsivo para mobile

## Créditos

- Design original: CTF Alquymia 2025
- Implementação: Manus AI
- Plataforma: CTFd

