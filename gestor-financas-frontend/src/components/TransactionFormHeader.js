import React from "react";
import logo from "../assets/logo-app.png";

const TransactionFormHeader = () => (
  <div className="transaction-navbar">
    <img src={logo} alt="Logo" className="transaction-logo" />
    <span className="transaction-app-name">MoneyController</span>
  </div>
);

export default TransactionFormHeader;
