/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */


    //Solicitando a quantidade de items
    let quantidadeItens = parseInt(prompt("Insira a quantidade de itens"));
    console.log("A quantidade de itens foi " + quantidadeItens);
    //Recebendo valor de itens
    let valorItem = parseFloat(prompt("Infome o valor do item"));
    console.log("O valor de cada item é " + valorItem);
    //Total gasto na compra
    let precoTotal = (quantidadeItens * valorItem);
    alert("O preço total ficou " + precoTotal);
