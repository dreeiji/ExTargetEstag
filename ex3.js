// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

async function calcularFaturamento() {
  try {
    const response = await fetch("dados.json");
    if (!response.ok) {
      throw new Error(
        `Erro na conexão: ${response.status} ${response.statusText}`
      );
    }

    const faturamentos = await response.json();

    // Filtra os dias com faturamento maior que zero
    const diasValidos = faturamentos.filter((item) => item.valor > 0);

    if (diasValidos.length === 0) {
      console.log("Não há faturamento válido.");
      return;
    }

    const menorFaturamento = Math.min(...diasValidos.map((item) => item.valor));
    const maiorFaturamento = Math.max(...diasValidos.map((item) => item.valor));
    const mediaFaturamento =
      diasValidos.reduce((acc, item) => acc + item.valor, 0) /
      diasValidos.length;

    const diasAcimaMedia = diasValidos.filter(
      (item) => item.valor > mediaFaturamento
    ).length;

    alert(
      `Menor faturamento: R$${menorFaturamento.toFixed(2)}` +
        `\nMaior faturamento: R$${maiorFaturamento.toFixed(2)}` +
        `\nNúmero de dias acima da média: ${diasAcimaMedia}`
    );
  } catch (error) {
    console.error("Houve um problema:", error);
  }
}

// Chama a função para calcular o faturamento
calcularFaturamento();
