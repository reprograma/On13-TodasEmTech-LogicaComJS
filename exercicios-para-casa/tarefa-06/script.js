/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let totalConta = parseFloat(prompt("Insira o valor total da conta (em reais):"));
let quantiaDinheiro = parseFloat(prompt("Insira a quantia em dinheiro fornecida pelo cliente (em reais):"));
let valorTroco = quantiaDinheiro - totalConta;
if (quantiaDinheiro < totalConta) {
  alert(`Valor insuficiente para pagar a conta. Gostaria de passar em outro método de pagamento?`)
} else {
  alert(`Seu troco será: R$ ${valorTroco}.`);
}