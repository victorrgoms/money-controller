export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const calculateTotals = (data) => {
  const totalReceitas = data
    .filter((item) => item.tipo === "Receita")
    .reduce((acc, item) => acc + item.valor, 0);
  const totalDespesas = data
    .filter((item) => item.tipo === "Despesa")
    .reduce((acc, item) => acc + item.valor, 0);
  const saldoAtual = totalReceitas - totalDespesas;
  return { totalReceitas, totalDespesas, saldoAtual };
};
