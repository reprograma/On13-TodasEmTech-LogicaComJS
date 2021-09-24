/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let price = Number(prompt('Digite o preço de uma mercadoria'));
let discount = Number(prompt('Insira um percentual de desconto'));
let finalDiscount = (price * discount) / 100;
let finalPrice = price - finalDiscount;
alert('Preço da mercadoria com desconto: ' + finalPrice);
alert('Você economizou: ' + finalDiscount)
