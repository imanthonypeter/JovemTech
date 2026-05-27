# 🚀 JovemTech

O **JovemTech** é um portal corporativo de recrutamento projetado para conectar jovens talentos a oportunidades de trabalho em startups e grandes empresas. Ele apresenta uma **Interface de Usuário (UI) Premium**, construída no estilo de startups do Vale do Silício (inspirada em Vercel e Linear), com foco absoluto em microinterações, velocidade e fluidez.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend** (UI Premium)
- **React.js** (via Vite)
- **Tailwind CSS v3** (para um Design System robusto, Glassmorphism e Dark Mode avançado)
- **Framer Motion** (animações orquestradas, físicas elásticas, transições de páginas)
- **Lucide React** (ícones minimalistas consistentes)
- **clsx** & **tailwind-merge** (para concatenação perfeita e inteligente de classes utilitárias)

### **Backend** (API & Banco de Dados)
- **Node.js** & **Express**
- **Sequelize ORM** (para interagir com o banco relacional)
- **PostgreSQL** (banco de dados escalável)
- *Obs: O backend está estruturado para suportar o gerenciamento completo de Vagas, Usuários (Empresas/Jovens) e Candidaturas.*

---

## 🎨 O Design System (The "Premium" Feel)
Todo o frontend foi meticulosamente desenhado com:
1. **Bento Grids**: Organização assimétrica e luxuosa de conteúdo.
2. **Aurora / Glow Effects**: Sombras coloridas (`box-shadow`), gradientes radiantes e iluminação sutil (shimmer/glow) nos cartões ao realizar hover.
3. **Glassmorphism**: Paineis e Navbars translúcidas com `backdrop-blur`.

---

## 🚀 Como executar o projeto localmente

### 1. Requisitos
- [Node.js](https://nodejs.org/en/) instalado (versão 18+ recomendada)
- [PostgreSQL](https://www.postgresql.org/) rodando localmente

### 2. Configurando o Banco de Dados
Na raiz do projeto, existe uma pasta `migrations/`. 
Abra o arquivo `migrations/01_init_schema.sql`, copie o conteúdo e rode no seu cliente do Postgres (como pgAdmin, DBeaver ou psql) para criar todas as tabelas (Usuarios, Vagas, Candidaturas) com as devidas chaves estrangeiras e relacionamentos.

### 3. Rodando o Frontend
Abra o terminal na raiz do projeto (onde está o `package.json` principal):
```bash
npm install
npm run dev
```
O Frontend estará disponível em `http://localhost:5174`.

### 4. Rodando o Backend
Abra um segundo terminal e navegue para a pasta `backend/`:
```bash
cd backend
npm install
node index.js
```
O Backend estará rodando em `http://localhost:6000`.

---

## ⚠️ Aviso Legal e Direitos Autorais

Este é um **Projeto Escolar** desenvolvido integralmente por mim, **António Pedro**. 

**Atenção:** Todos os direitos são reservados. Cópias, reproduções, distribuições, forks ou downloads não autorizados deste repositório e de seu código-fonte são estritamente **proibidos** sem a permissão prévia e explícita do autor.

---
*Desenvolvido com um foco obsessivo na melhor UI/UX possível para a próxima geração de talentos.*
