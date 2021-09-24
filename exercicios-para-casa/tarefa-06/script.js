/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
let quantiaEmDinheiro = prompt("Digite a quantidade em dinheiro dada pelo cliente:");
let valorTotalDaConta = prompt("Digite o valor total da conta do cliente:");
let troco = quantiaEmDinheiro - valorTotalDaConta;
alert(`${troco}`);