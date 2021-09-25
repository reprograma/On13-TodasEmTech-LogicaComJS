/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
*/


let Pagamento = Number(prompt('Insira o valor pago pelo cliente: '));

let Total = Number(prompt('Insira o total gasto pelo cliente: '));

let troco = Pagamento - Total;
console.log(troco);

alert('O valor do troco é R$' + troco)