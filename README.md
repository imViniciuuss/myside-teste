# 🚀 Teste tecnico - MySide

---

## 🔗 Links

| Recurso | URL |
|---|---|
| 🌐 Aplicacao em Producao | [DEPLOY DO PROJETO](https://myside-teste.vercel.app/) |
| 📦 Repositorio GitHub | [REPOSITORIO](https://github.com/imViniciuuss/myside-teste) |

---

## ✨ Funcionalidades

- Catalogo de produtos consumindo a DummyJSON API
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
| **Dados** | DummyJSON API (`https://dummyjson.com`) |
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

## 🔒 Observação

- Eu troquei a api de produtos para utilizar a api DummyJSON (`https://dummyjson.com/`). A Fake Store API (`https://fakestoreapi.com`) foi trocada porque, no deploy na Vercel (e em hosts serverless semelhantes), as requisicoes feitas pelo servidor para essa API falhavam com frequencia (timeout, bloqueio por IP ou instabilidade), deixando o catalogo vazio em producao. É possível que outros desenvolvedores tenham tido o mesmo problema. A DummyJSON responde de forma estavel nesses ambientes, logo, optei por utiliza-lá e acabei mapeando os mesmos campos dos produtos que tinham na FakeStore para o DummyJSON.

---

## ✅ Entrega

- Repositorio Git: codigo-fonte disponivel no GitHub
- README com instrucoes claras para instalacao e execucao local
