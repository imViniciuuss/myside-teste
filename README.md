# 🚀 Teste tecnico - MySide

---

## 🔗 Links

| Recurso | URL |
|---|---|
| 🌐 Aplicacao em Producao | [DEPLOY DO PROJETO](https://myside-teste.vercel.app/) |
| 📦 Repositorio GitHub | [REPOSITORIO](https://github.com/imViniciuuss/myside-teste) |

---

## ✨ Funcionalidades

- Catalogo de produtos consumindo a Fake Store API
- Busca por nome e descricao dos produtos
- Filtro por categoria
- Paginacao de produtos
- Pagina de detalhe do produto
- Carrinho global com contexto React:
  - adicionar item
  - remover item
  - atualizar quantidade
  - limpar carrinho
- Sidebar do carrinho com total de itens e valor total
- Estados de loading com skeletons na home e no detalhe
- Testes unitarios para componentes principais e contexto de carrinho

---

## 🛠️ Stack Tecnologica

| Camada | Tecnologia |
|---|---|
| **Frontend** | Next.js 16 + React 19 + TypeScript |
| **Estilizacao** | styled-components |
| **Icones** | lucide-react |
| **Dados** | Fake Store API |
| **Testes** | Jest + Testing Library |
| **Deploy** | Vercel |

---

## ⚙️ Como Rodar Localmente

### Pre-requisitos

- Node.js >= 18
- npm (ou yarn/pnpm/bun)

### 1. Clone o repositorio

```bash
git clone https://github.com/imViniciuuss/myside-teste.git
cd myside-teste
```

### 2. Instale as dependencias

```bash
npm install
```

### 3. Rode o projeto em desenvolvimento

```bash
npm run dev
```

Acesse em: `http://localhost:3000`

---

## 🧪 Scripts Disponiveis

```bash
npm run dev        # ambiente de desenvolvimento
npm run build      # build de producao
npm run start      # sobe build de producao
npm run lint       # analise estaticamente o codigo
npm run test       # executa testes unitarios
npm run test:watch # executa testes em modo watch
```

---

## 🧱 Estrutura de Pastas

```bash
app/          # rotas e paginas (App Router)
components/   # componentes reutilizaveis e de tela
context/      # contexto global do carrinho
hooks/        # hooks customizados
services/     # camada de integracao com API externa
types/        # tipagens do dominio
__tests__/    # testes unitarios
```

---

## 🔒 Observacoes

- Este projeto nao exige variaveis de ambiente para rodar localmente, pois usa API publica (`https://fakestoreapi.com`).
- Para ambiente real, recomendam-se:
  - API propria (backend) para controle de dados e seguranca
  - tratamento de erros mais granular por endpoint
  - monitoramento e rate limiting no servidor

---

## ✅ Entrega

- Repositorio Git: codigo-fonte disponivel no GitHub
- README com instrucoes claras para instalacao e execucao local
