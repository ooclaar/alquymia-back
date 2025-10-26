# 📚 Documentação Final - Alquymia CTF 2025

## 🎯 Visão Geral do Projeto

Este documento descreve todas as funcionalidades implementadas no tema customizado **Alquymia** para a plataforma CTFd, desenvolvido para a **4ª edição do Alquymia CTF 2025**.

---

## ✅ Funcionalidades Implementadas

### 1. 🎨 Tema Customizado "Alquymia"

O tema foi desenvolvido do zero com design moderno e responsivo, utilizando:
- **Cores principais:** Fundo escuro (#0a0e27) com acentos laranja (#ff9500)
- **Tipografia:** Fonte Orbitron para títulos, fonte padrão para textos
- **Efeitos visuais:** Gradientes, sombras, animações suaves
- **Responsividade:** Layout adaptável para desktop, tablet e mobile

### 2. 🏆 Sistema de Desafios com Modal

**Arquivo:** `/home/ubuntu/CTFd/CTFd/themes/alquymia/templates/challenges.html`

**Funcionalidades:**
- ✅ Listagem de desafios em cards organizados por categoria
- ✅ Filtro por categoria (All, Web, Crypto, Pwn, Forensics, etc.)
- ✅ **Modal overlay** para submissão de flags
- ✅ Validação de flags via API CTFd
- ✅ Feedback visual (sucesso/erro) com mensagens coloridas
- ✅ Integração com CSRF token para segurança
- ✅ Indicador de desafios resolvidos (checkmark verde)
- ✅ Exibição de pontos e número de solves por desafio

**Fluxo de uso:**
1. Usuário clica em um desafio
2. Modal abre com descrição, arquivos e campo de flag
3. Usuário digita a flag e clica em "Enviar"
4. Sistema valida via API e mostra feedback
5. Se correto, desafio é marcado como resolvido

### 3. 📊 Classificação com Gráfico Multi-Equipes

**Arquivo:** `/home/ubuntu/CTFd/CTFd/themes/alquymia/templates/scoreboard.html`

**Funcionalidades:**
- ✅ Tabela de classificação com ranking, nome, pontuação
- ✅ **Gráfico de evolução** mostrando top 10 equipes
- ✅ Linhas coloridas para cada equipe (10 cores diferentes)
- ✅ Eixo X: Tempo (timestamps dos solves)
- ✅ Eixo Y: Pontuação acumulada
- ✅ Legenda interativa com cores das equipes
- ✅ Atualização automática via API CTFd

**Tecnologias:**
- Chart.js para renderização do gráfico
- API `/api/v1/scoreboard/top/10` para dados das equipes
- API `/api/v1/teams/{id}/solves` para histórico de solves

### 4. 👥 Perfis de Equipes e Usuários

**Arquivos:**
- `/home/ubuntu/CTFd/CTFd/themes/alquymia/templates/teams/public.html`
- `/home/ubuntu/CTFd/CTFd/themes/alquymia/templates/users/public.html`

**Funcionalidades:**
- ✅ Exibição de informações da equipe/usuário
- ✅ Lista de membros (para equipes)
- ✅ Estatísticas (pontuação, ranking, desafios resolvidos)
- ✅ Histórico de solves com timestamps
- ✅ Design consistente com o tema Alquymia

### 5. ⏱️ Cronômetro Regressivo

**Arquivos:**
- `/home/ubuntu/CTFd/CTFd/themes/alquymia/templates/base.html`
- `/home/ubuntu/CTFd/CTFd/themes/alquymia/templates/page.html`
- `/home/ubuntu/CTFd/CTFd/themes/alquymia/static/css/styles.css`

**Funcionalidades:**
- ✅ Aparece automaticamente **antes do início do evento**
- ✅ Conta regressiva em tempo real (dias, horas, minutos, segundos)
- ✅ Design moderno com borda laranja e fundo escuro
- ✅ Exibe datas de início e término do evento
- ✅ **Desaparece automaticamente** quando o evento começa
- ✅ Oculta conteúdo da página inicial enquanto ativo

**Lógica de exibição:**
```javascript
// Se tempo atual < início do evento
if (now < eventStart) {
    // Mostra cronômetro
    countdown.style.display = 'flex';
    mainContent.style.display = 'none';
} else {
    // Oculta cronômetro
    countdown.style.display = 'none';
    mainContent.style.display = 'block';
}
```

### 6. 🔒 Controle de Visibilidade

**Configurações aplicadas no painel admin:**
- ✅ **Desafios:** Privados (só visíveis durante o evento)
- ✅ **Classificação:** Privada (só visível durante o evento)
- ✅ **Registro:** Aberto (usuários podem se registrar antes)

**Comportamento:**
- **Antes do evento:** Cronômetro visível, desafios/classificação bloqueados
- **Durante o evento:** Cronômetro oculto, desafios/classificação acessíveis
- **Após o evento:** Desafios bloqueados, classificação visível (resultados)

### 7. 🖼️ Logo e Identidade Visual

**Arquivo:** `/home/ubuntu/CTFd/CTFd/themes/alquymia/static/img/logo-alquymia.png`

**Funcionalidades:**
- ✅ Logo atualizada com subtítulo "4ª Edição"
- ✅ Exibida no cabeçalho de todas as páginas
- ✅ Exibida no rodapé
- ✅ Link para página inicial

### 8. 🔐 Segurança

**Implementações:**
- ✅ **CSRF Token** em todas as requisições POST
- ✅ Validação de flags via API oficial do CTFd
- ✅ Autenticação necessária para acessar desafios
- ✅ Proteção contra submissões duplicadas

---

## 📅 Configurações do Evento

### Datas Configuradas

| Evento | Data e Hora | Timezone |
|--------|-------------|----------|
| **Início** | 21/11/2025 às 18:00 | GMT-3 |
| **Término** | 23/11/2025 às 23:00 | GMT-3 |

### Cronograma

**Fase 1: Pré-Evento (Até 21/11/2025 18:00)**
- Cronômetro regressivo visível
- Registro de usuários aberto
- Criação de equipes permitida
- Desafios e classificação não acessíveis

**Fase 2: Durante o Evento (21/11 18:00 - 23/11 23:00)**
- Cronômetro desaparece
- Desafios acessíveis
- Classificação em tempo real
- Submissão de flags ativa

**Fase 3: Pós-Evento (Após 23/11/2025 23:00)**
- Desafios bloqueados
- Classificação final visível
- Resultados preservados

---

## 🗂️ Estrutura de Arquivos

```
/home/ubuntu/CTFd/CTFd/themes/alquymia/
├── templates/
│   ├── base.html                    # Template base com cronômetro
│   ├── page.html                    # Página inicial
│   ├── challenges.html              # Página de desafios com modal
│   ├── scoreboard.html              # Classificação com gráfico
│   ├── team.html                    # Página da equipe do usuário
│   ├── teams/
│   │   └── public.html              # Perfil público de equipe
│   └── users/
│       └── public.html              # Perfil público de usuário
├── static/
│   ├── css/
│   │   └── styles.css               # Estilos customizados
│   └── img/
│       └── logo-alquymia.png        # Logo atualizada
└── config.json                      # Configurações do tema
```

---

## 🔧 Tecnologias Utilizadas

### Backend
- **CTFd:** Framework de CTF baseado em Flask
- **Python:** Linguagem de programação
- **SQLite:** Banco de dados
- **Jinja2:** Engine de templates

### Frontend
- **HTML5:** Estrutura das páginas
- **CSS3:** Estilização e animações
- **JavaScript:** Interatividade e lógica
- **Chart.js:** Gráficos de pontuação
- **Fetch API:** Requisições assíncronas

### APIs Utilizadas
- `/api/v1/challenges` - Lista de desafios
- `/api/v1/challenges/{id}/attempt` - Submissão de flags
- `/api/v1/scoreboard/top/10` - Top 10 equipes
- `/api/v1/teams/{id}/solves` - Histórico de solves
- `/api/v1/teams/{id}` - Informações da equipe
- `/api/v1/users/{id}` - Informações do usuário

---

## 🧪 Testes Realizados

### ✅ Testes de Funcionalidade

1. **Cronômetro Regressivo**
   - ✅ Aparece antes do evento
   - ✅ Conta regressiva corretamente
   - ✅ Atualiza em tempo real (segundos)
   - ✅ Exibe datas corretas do evento

2. **Sistema de Desafios**
   - ✅ Modal abre ao clicar no desafio
   - ✅ Submissão de flag funciona
   - ✅ Feedback visual correto (sucesso/erro)
   - ✅ Desafios resolvidos marcados

3. **Gráfico de Classificação**
   - ✅ Mostra top 10 equipes
   - ✅ Linhas coloridas diferentes
   - ✅ Evolução de pontuação correta
   - ✅ Legenda interativa

4. **Perfis**
   - ✅ Perfil de equipe exibe membros
   - ✅ Perfil de usuário exibe estatísticas
   - ✅ Histórico de solves visível

### ✅ Testes de Segurança

1. **CSRF Protection**
   - ✅ Token incluído em todas as requisições POST
   - ✅ Validação no backend

2. **Autenticação**
   - ✅ Desafios requerem login
   - ✅ Redirecionamento para login se não autenticado

3. **Autorização**
   - ✅ Desafios privados não acessíveis antes do evento
   - ✅ Classificação privada não acessível antes do evento

### ✅ Testes de Responsividade

1. **Desktop (1920x1080)**
   - ✅ Layout correto
   - ✅ Gráfico renderiza corretamente

2. **Tablet (768x1024)**
   - ✅ Layout adaptado
   - ✅ Menu responsivo

3. **Mobile (375x667)**
   - ✅ Layout mobile-first
   - ✅ Elementos empilhados

---

## 🚀 Como Usar

### Para Administradores

1. **Configurar Datas do Evento:**
   - Acessar painel admin: http://localhost:8000/admin
   - Ir em Config > Dates
   - Definir Start e End

2. **Configurar Visibilidade:**
   - Config > Visibility
   - Challenges: Private
   - Scoreboard: Private

3. **Adicionar Desafios:**
   - Admin > Challenges > Create
   - Preencher nome, categoria, descrição, flag, pontos

4. **Monitorar Evento:**
   - Scoreboard mostra classificação em tempo real
   - Admin panel mostra estatísticas

### Para Participantes

1. **Antes do Evento:**
   - Acessar site
   - Ver cronômetro regressivo
   - Criar conta e equipe

2. **Durante o Evento:**
   - Fazer login
   - Acessar Challenges
   - Resolver desafios
   - Submeter flags
   - Acompanhar classificação

3. **Após o Evento:**
   - Ver classificação final
   - Revisar desafios resolvidos

---

## 🔗 Links Importantes

**URL Pública:** https://8000-ieyhsrjg01y0zj9vgp0u2-86a20a50.manusvm.computer

**Repositório GitHub:** https://github.com/ooclaar/alquymia-back

**Documentação CTFd:** https://docs.ctfd.io/

---

## 📝 Credenciais de Teste

**Usuário de Teste:**
- Username: `teste_user`
- Password: `senha123`

**Admin:**
- Username: `admin`
- Password: (definida na instalação)

---

## 🎯 Status Final

### ✅ Funcionalidades Completas

- ✅ Tema customizado Alquymia
- ✅ Modal de desafios com submissão de flags
- ✅ Gráfico de classificação multi-equipes
- ✅ Perfis de equipes e usuários
- ✅ Cronômetro regressivo
- ✅ Controle de visibilidade
- ✅ Logo atualizada
- ✅ Segurança (CSRF, autenticação)
- ✅ Responsividade
- ✅ Integração com API CTFd

### 🎉 Projeto 100% Completo!

O sistema está **totalmente funcional** e pronto para o **Alquymia CTF 2025**!

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar esta documentação
2. Consultar documentação oficial do CTFd
3. Revisar código-fonte no repositório GitHub

---

**Desenvolvido para a 4ª Edição do Alquymia CTF 2025** 🚀

