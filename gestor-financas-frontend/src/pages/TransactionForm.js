import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/TransactionForm.css";
import TransactionFormHeader from "../components/TransactionFormHeader";
import TransactionFormGroup from "../components/TransactionFormGroup";

const TransactionForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    navigate("/");
  };

  return (
    <div className="transaction-fullscreen">
      <TransactionFormHeader />
      <div className="transaction-form-container">
        <form className="transaction-form" onSubmit={handleSubmit}>
          <h2>Nova Transação</h2>
          <TransactionFormGroup label="Descrição" type="text" required />
          <TransactionFormGroup label="Valor" type="number" required />
          <TransactionFormGroup label="Data" type="date" required />
          <TransactionFormGroup
            label="Tipo"
            type="select"
            required
            options={[
              { value: "despesa", label: "Despesa" },
              { value: "receita", label: "Receita" },
            ]}
          />
          <button type="submit">Salvar Transação</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
