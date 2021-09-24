/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
let itens = prompt("Digite a quantidade de itens na compra:");
let valor = prompt("Digite o valor de cada um dos itens da compra:");
let valorTotal = itens * valor;
alert(`${valorTotal}`);