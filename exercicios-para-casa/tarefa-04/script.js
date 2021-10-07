/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let item1 = Number(prompt('insira o valor do item 1'));
    let item2 = Number(prompt('insira o valor do item 2'));
    let item3 = Number(prompt('insira o valor do item 3'));
    let item4 = Number(prompt('insira o valor do item 4'));
    let item5 = Number(prompt('insira o valor do item 5'));    
    let item6 = Number(prompt('insira o valor do item 6'));
    let item7 = Number(prompt('insira o valor do item 7'));
    let item8 = Number(prompt('insira o valor do item 8'));
    let item9 = Number(prompt('insira o valor do item 9'));
    let item10 = Number(prompt('insira o valor do item 10'));

    let finalPrice = (item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10);

    alert(`o preço final é R$ ${finalPrice}`);