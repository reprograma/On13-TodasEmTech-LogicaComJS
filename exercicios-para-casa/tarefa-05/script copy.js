/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let hasItem = confirm("Do you have any items?")
let totalItems = 0

while (hasItem) {
    let itemValue = parseInt(prompt("How much this item cost?"))

    totalItems += itemValue
    hasItem = confirm("Do you have more items?")
}
console.log(totalItems)
