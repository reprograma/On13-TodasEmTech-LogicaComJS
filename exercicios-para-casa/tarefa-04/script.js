/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let i, item = [], soma=0;

for(i=0;i<10;i++){
    item[i]= parseFloat(prompt(`Preço do item ${i+1}`));
    soma += item[i];
}

alert(`valor total da compra: ${soma}`);