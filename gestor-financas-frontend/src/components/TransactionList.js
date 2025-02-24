import React from "react";
import { formatCurrency } from "../utils/financeUtils";

const TransactionList = ({ data }) => (
  <div className="transactions">
    <div className="transaction-header">
      <div className="item-list">
        <p>Descrição</p>
      </div>
      <div className="item-valor">
        <p>Valor</p>
      </div>
      <div className="item-list">
        <p>Data</p>
      </div>
      <div className="item-list">
        <p>Tipo</p>
      </div>
    </div>
    {data.map((item) => (
      <div
        key={item.id}
        className={`transaction-item ${item.tipo.toLowerCase()}`}
      >
        <div className="item-list">
          <p>{item.descricao}</p>
        </div>
        <div className="item-valor">
          <p>{formatCurrency(item.valor)}</p>
        </div>
        <div className="item-list">
          <p>{item.data}</p>
        </div>
        <div className="item-list">
          <p>{item.tipo}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TransactionList;
