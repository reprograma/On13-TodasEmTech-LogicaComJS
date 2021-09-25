/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
*/
let soma= 0;
var x=1;

while(x<=10){
  let Preco = prompt("Insira o valor deste produto: ");
  console.log(Preco);
  x+=1; 
  soma +=Preco++;
}
alert('O valor total de todos os itens é R$'+soma);

