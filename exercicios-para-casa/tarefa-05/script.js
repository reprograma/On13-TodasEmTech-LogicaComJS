/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let itensCompra = Number(prompt("Informe a quantidade de itens da compra"));

// let valorItens = [];

let totalCompra = 0; 


for(let i=0; i < itensCompra; i++) {
    const item = Number(prompt(`Escreva o valor ${i}`))
    totalCompra += item;
};

// for(let i=0; i < itensCompra; i++) {
//     valorItens.push(Number(prompt(`Escreva o valor do item ${i}`)));

// };

// for(let item = 0; item < valorItens.length; item++) {
//     totalCompra += valorItens[item];
// }

alert("A soma total é: " + totalCompra); 

