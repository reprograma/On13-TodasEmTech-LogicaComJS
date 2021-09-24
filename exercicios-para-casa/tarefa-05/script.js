/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
   
   
    let quantidadeItens = parseInt(prompt("Insira a quantidade de itens"));
    console.log("A quantidade de itens digitados " + quantidadeItens);
    let itemValor = parseInt(prompt("Infome o valor do item"));
    console.log("O valor de cada item é " + itemValor);
    let total = (itemValor  * quantidadeItens);
    console.log("O preço total ficou " + total);

   