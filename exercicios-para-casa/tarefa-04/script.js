/**
    Tarefa 04
    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */


let priceSum = 0;
for (let i = 0; i < 10; i++) {
    const prices = (Number(prompt('digite o preço do item')));
    priceSum += prices;
}

alert('A soma total é: ' + priceSum);


