/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


let mercadoria = Number(prompt("Digite o preço da mercadoria"));

let desconto = Number(prompt("Insira o porcentual do desconto "));

let valor = (mercadoria * desconto) / 100;

alert("Seu valor é " + valor);

let economia = mercadoria - valor;
alert("Você economizou " + economia);