import React from "react";

const Navbar = ({ logo, onNewTransaction }) => (
  <nav className="navbar">
    <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="app-name">MoneyController</span>
    </div>
    <div className="navbar-right">
      <button className="new-transaction-button" onClick={onNewTransaction}>
        Nova Transação
      </button>
    </div>
  </nav>
);

export default Navbar;
