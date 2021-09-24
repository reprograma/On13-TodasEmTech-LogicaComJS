/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let i = 0;
let precoItens = 0;
soma = 0;
while (i < 10) {
    precoItens = parseFloat(prompt('Insira o valor do produto em reais:'));
    soma += precoItens;
    i++;
}

alert(`A soma dos itens será: R$ ${soma}.`);