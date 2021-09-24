/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let money = Number(prompt('Informe a quantia em dinheiro'));
let total = Number(prompt('Qual o valor total da sua compra?'));

let finalValue = money - total;
alert('Seu troco é: ' + finalValue);

