/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let price = Number(prompt("Digite qual o preço da mercadoria"));
let discount = Number(prompt("Qual o percentual do desconto para a mercadoria?"));

let newPrice = (price*discount)/ 100;
alert(`O valor é ${newPrice}`);

let difference = price - newPrice;
alert(`Você economizou ${difference}`);