# House Cleaning System

Este é um monorepositório para o sistema de limpeza doméstica, contendo tanto o projeto backend (Node.js com Fastify) quanto o projeto frontend React (Next.js com Stitches CSS-in-JS).

## 🚀 Testes Automatizados com GitHub Actions

Neste projeto, dedicamos um esforço especial para garantir a qualidade e a eficiência do nosso código através da implementação de testes automatizados com GitHub Actions. Essa prática assegura que cada commit e pull request passam por uma bateria de testes para garantir que tudo está funcionando conforme esperado, mantendo a integridade do nosso sistema.


## Pré-requisitos Gerais

Antes de iniciar, certifique-se de que você tem o seguinte instalado:
- Node.js
- npm
- Docker

---

### Dependências do Backend

#### DevDependencies
- `@types/node`: 20.11.14
- `@typescript-eslint/eslint-plugin`: 6.20.0
- `@typescript-eslint/parser`: 6.20.0
- `eslint`: 8.56.0
- `prisma`: 5.9.0
- `tsup`: 8.0.1
- `tsx`: 4.7.0
- `typescript`: 5.3.3
- `vite-tsconfig-paths`: 4.3.1
- `vitest`: 1.2.2

#### Dependencies
- `@fastify/cors`: 9.0.1
- `@prisma/client`: 5.9.0
- `dotenv`: 16.4.1
- `fastify`: 4.26.0
- `zod`: 3.22.4

## Backend: HouseCleaningBackEnd

Localizado na pasta `HouseCleaningBackEnd`.

### Configuração Inicial

1. **Crie o arquivo .env:**

   Duplique `.env.example` renomeando a cópia para `.env`. Modifique as variáveis de ambiente conforme necessário.

2. **Instale as dependências:**
   
   ```bash
   npm install
   
   docker compose up -d
   
   npx prisma migrate dev
   
   npm run start:dev

## Frontend: House Cleaning Front-End

Localizado na pasta `house-cleaning-front-end`.

### Dependências do Frontend

### Dependências do Frontend

#### Dependencies
- `@stitches/react`: 1.2.8
- `axios`: 1.6.7
- `lucide-react`: 0.321.0
- `next`: 14.1.0
- `react`: 18.x
- `react-dom`: 18.x
- `react-input-mask`: 2.0.4
- `react-modal`: 3.16.1

#### DevDependencies
- `@rocketseat/eslint-config`: 2.1.0
- `@types/node`: 20.x
- `@types/react`: 18.x
- `@types/react-dom`: 18.x
- `@types/react-input-mask`: 3.0.5
- `@types/react-modal`: 3.16.3
- `eslint`: 8.56.0
- `eslint-config-next`: 14.1.0
- `typescript`: 5.x

### Configuração Inicial

1. **Instale as dependências:**

```bash
   npm install
   
   npm run dev

