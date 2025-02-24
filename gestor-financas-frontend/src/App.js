import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TransactionForm from "./pages/TransactionForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova-transacao" element={<TransactionForm />} />
      </Routes>
    </Router>
  );
};

export default App;
