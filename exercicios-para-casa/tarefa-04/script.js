/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let preco = 0;
let soma = 0;

for (let i = 0; i < 10; i++) {
    preco = parseInt(prompt("Digite o valor do item: "));
    soma = soma + preco;
}

alert(`A soma é ${soma}`);