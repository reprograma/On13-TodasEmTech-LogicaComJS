/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let quantiaD = Number(prompt("Valor dado pelo cliente:"));
let contaT = Number(prompt("Total da conta do cliente:"));
troco = (quantiaD - contaT)
alert("O troco do cliente é R$" + troco);