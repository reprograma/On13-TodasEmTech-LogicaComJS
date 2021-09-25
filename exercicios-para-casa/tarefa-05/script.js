/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantItens = 0, valorItem = 0, totalGasto = 0, cont = 0;

quantItens = parseInt(prompt("Informe a quantidade de itens da compra: "));

while (cont < quantItens) {
    cont++;
    valorItem = parseInt(prompt("Informe o valor do item: "));
    totalGasto += valorItem;
}

alert(`Total gasto na compra: ${totalGasto},00`);

