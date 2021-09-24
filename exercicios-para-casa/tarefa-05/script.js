/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let itensCompra = Number(prompt("Informe a quantidade de itens da compra"));
let totalCompra = 0;

for(let i=0; i < itensCompra; i++) {
    const item = Number(prompt(`Escreva o valor ${i}`))
    totalCompra += item;
};
alert(totalCompra);