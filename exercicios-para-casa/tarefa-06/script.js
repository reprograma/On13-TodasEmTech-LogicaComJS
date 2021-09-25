/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

//1.
let dinh = Number(prompt("Qual o valor dado pelo cliente?"));

//2.
let total = Number(prompt("Qual o valor total da conta?"));
let troco = total - dinh;

//3.
alert("O valor do troco foi de R$" + troco);