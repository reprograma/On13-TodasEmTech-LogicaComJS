/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let valor = (Number(prompt('Qual a quantia dada pelo cliente')))
let total = (Number(prompt('Informe o total da conta do cliente')))

let valorTotal = valor - total;
alert( `O valor total é ${valorTotal}`)