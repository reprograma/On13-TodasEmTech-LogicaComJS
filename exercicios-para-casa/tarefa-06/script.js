/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */


let valorRecebido = parseFloat(prompt("Informe a quantia em dinheiro dada pelo cliente: "));
let totalConta = parseFloat(prompt("Informe o total da conta do cliente: "));

let troco = valorRecebido - totalConta;

alert(`Troco: R$ ${troco}`);