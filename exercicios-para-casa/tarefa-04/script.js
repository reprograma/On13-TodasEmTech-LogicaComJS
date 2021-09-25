/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let contador = 1;
soma = 0;
while (contador <= 10) {
    let i = Number(prompt("Digite o valor do produto aqui:"));
    ++contador;
    soma += i;
}

alert('o valor final é: ' + soma);