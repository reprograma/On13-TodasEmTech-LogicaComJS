/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

//1.
let valor = 0;
let soma = 0;

for (i=1; i <= 10; i++){
    let valor = Number(prompt("Digite o valor do item."));
    soma = soma + valor;
}

//2.
alert("A soma é de R$" + soma);