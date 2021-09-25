/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */


    let items = 10;

    let sum = 0;

    for (let i = 0; i <= items; i++){
        let price = Number(prompt("Insira o preço do item"));
        sum += price;
    };
    
    alert(`A soma total é ${sum}`)