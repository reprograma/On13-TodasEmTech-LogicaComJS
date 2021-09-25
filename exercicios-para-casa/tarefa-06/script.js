/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

const quantia = Number(prompt("Quantia em dinheiro paga: "));
const conta = Number(prompt("Valor da conta: "));

const total = quantia - conta;
alert(`Seu troco é: ${total} R$`);
