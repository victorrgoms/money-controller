import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Home.css";
import logo from "../assets/logo-app.png";
import { formatCurrency, calculateTotals } from "../utils/financeUtils";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TransactionList from "../components/TransactionList";

const data = [
  {
    id: 1,
    valor: 5000,
    descricao: "Salário",
    data: "2025-02-01",
    tipo: "Receita",
  },
  {
    id: 2,
    valor: 1500,
    descricao: "Freelance",
    data: "2025-02-10",
    tipo: "Receita",
  },
  {
    id: 3,
    valor: 2500,
    descricao: "Investimentos",
    data: "2025-02-15",
    tipo: "Despesa",
  },
  {
    id: 4,
    valor: 800,
    descricao: "Aluguel",
    data: "2025-02-20",
    tipo: "Despesa",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { totalReceitas, totalDespesas, saldoAtual } = calculateTotals(data);

  const handleNewTransaction = () => {
    navigate("/nova-transacao");
  };

  return (
    <div className="fullscreen">
      <Navbar logo={logo} onNewTransaction={handleNewTransaction} />
      <div className="dashboard">
        <div className="cards">
          <Card
            title="Receitas"
            value={formatCurrency(totalReceitas)}
            className="receitas"
          />
          <Card
            title="Despesas"
            value={formatCurrency(totalDespesas)}
            className="despesas"
          />
          <Card
            title="Saldo Atual"
            value={formatCurrency(saldoAtual)}
            className="saldo"
          />
        </div>
        <TransactionList data={data} />
      </div>
    </div>
  );
};

export default Home;
