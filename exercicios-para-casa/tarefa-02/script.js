/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


let price = Number(prompt("Informe o preço do produto"));

let percent = Number(prompt("Informe o percenual de desconto"));

let discount = price * percent / 100;
let result = price - discount;

alert(`O valor com desconto fica R$${result}`);

let economy = (price - result);
alert(`Você economizou R$${economy}`)