/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
*/


let soma= 0;
var x=1;
var Quantidade= prompt('Insira a quantidade de produtos comprados: ');

while(x<=Quantidade){
  let Preco = prompt("Insira o valor deste produto: ");
  console.log(Preco);
  x+=1; 
  soma +=Preco++;
}
alert('O total gasto nessa compra foi R$'+soma);