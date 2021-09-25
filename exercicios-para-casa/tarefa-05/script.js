/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

//1.
let itens = Number(prompt("Digite a quantidade de itens da compra:"));
soma = 0;

//2.
while (itens > 0){
    let valor = Number(prompt("Digite o valor do item:"));
    soma = soma + valor;
    itens--;
}

//3.
alert("A soma deu R$" + soma);
