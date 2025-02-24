# MoneyController

MoneyController é uma aplicação web para gerenciar suas finanças pessoais. Com ela, você pode registrar receitas e despesas, visualizar o saldo atual e acompanhar suas transações.

## Tecnologias Utilizadas

- React
- React Router DOM
- Axios
- Chart.js
- React Chart.js 2

## Estrutura do Projeto

gestor-financas-frontend/
├── .gitignore
├── package.json
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── README.md
├── src/
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── assets/
│ │ ├── css/
│ │ │ ├── Home.css
│ │ │ └── TransactionForm.css
│ │ ├── logo-app.png
│ │ └── logo.svg
│ ├── components/
│ │ ├── Card.js
│ │ ├── Navbar.js
│ │ ├── TransactionFormGroup.js
│ │ ├── TransactionFormHeader.js
│ │ └── TransactionList.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── pages/
│ │ ├── Home.js
│ │ └── TransactionForm.js
│ ├── reportWebVitals.js
│ ├── services/
│ │ └── api.js
│ ├── setupTests.js
│ └── utils/
│ └── financeUtils.js

## Funcionalidades

- **Home**: Página inicial que exibe o saldo atual, total de receitas e despesas, além da lista de transações.
- **Nova Transação**: Página para adicionar uma nova transação (receita ou despesa).

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/money-controller.git
   cd money-controller/gestor-financas-frontend
   ```

2. Instale as dependências:
   npm install
   # ou
   yarn install
