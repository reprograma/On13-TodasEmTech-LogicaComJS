/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */
const valorMercadoria = Number(prompt("Qual o valor do produto"));
const valorDesconto = Number (prompt("Qual o valordo desconto?"));
const valorEconomizado = {valorDesconto /100) * (valorMercadoria};
const mercadoriaComDesconto = alert (
    `Valor com desconto: ${valorMercadoria - valorEconomizado} `
);
alert(`Você Ecomonomizou: ${valorEconomizado.toFixed(2)}`);
