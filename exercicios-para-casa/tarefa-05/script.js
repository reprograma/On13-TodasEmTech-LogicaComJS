/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */


    let quantItens = Number(prompt("Insira a quantidade de itens da sua compra"));
    let valorItens = Number(prompt("Insira o valor dos itens"));
    let valorTotal = valorItens * quantItens;
    alert("O valor total da compra é R$" + valorTotal);