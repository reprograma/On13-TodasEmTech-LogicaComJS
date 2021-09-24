/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let quantity = Number(prompt("Insira a quantidade de itens da sua compra"));

    let price = Number(prompt("Insira o valor dos itens"));

    let product = price * quantity;

    alert(product);