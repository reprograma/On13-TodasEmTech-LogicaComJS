/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let itemsNumber = Number(prompt('Informe a quantidade de itens na compra'));
let total = 0;

for (let i = 0; i < itemsNumber; i++) {
    const item = Number(prompt(`Escreva o valor ${i}`));
    total += item;

}
alert('A soma total é: ' + total);

