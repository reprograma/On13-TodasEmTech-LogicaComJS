/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */


let quantiaCliente = Number(prompt("Digite a quantia recebida pelo cliente"));
let totalContaCliente = Number(prompt("Digite o valor total da conta do cliente"));

let valorTroco = quantiaCliente - totalContaCliente; 
alert("O valor do troco é : " + valorTroco);