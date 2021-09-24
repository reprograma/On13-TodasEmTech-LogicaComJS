/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let money = Number(prompt("Insira a quantia em dinheiro dada pelo clente"));

    let total = Number(prompt("Insira o total da compra do cliente"));

    let change = money - total;
    console.log(change)

    alert(`O valor do troco deve ser ${change}`)
