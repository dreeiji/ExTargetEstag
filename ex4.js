// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

function calcularPercentual(faturamento) {
  //calcular o total de faturamento
  const totalFaturamento = Object.values(faturamento).reduce(
    (acc, curr) => acc + curr,
    0
  );

  //calcular o percentual de cada estado
  const percentual = {};

  for (const estado in faturamento) {
    percentual[estado] =
      ((faturamento[estado] / totalFaturamento) * 100).toFixed(2) + "%";
  }

  return percentual;
}

//faturamentos
const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const percetual = calcularPercentual(faturamento);

for (const estado in percetual) {
  alert(
    "Percentual de representação de cada estado:" +
      `\n${estado}: ${percetual[estado]}`
  );
}
