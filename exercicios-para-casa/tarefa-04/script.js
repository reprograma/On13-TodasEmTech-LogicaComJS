/*
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

var total = 0;
for (i = 1; i <= 10; i++) {
    var preco = Number(prompt("Digite o valor dos itens"));
    var total = total + preco;
}
alert(total);