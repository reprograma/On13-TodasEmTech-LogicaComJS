/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let precoMercadoria = Number(prompt("Insira o valor do produto:"));
let percDesconto = Number(prompt("Insira a % do desconto:"));

let valorMercadoria = precoMercadoria - ((precoMercadoria * percDesconto) / 100);
alert("O valor da mercadoria com desconto é R$" + valorMercadoria);
alert("Nessa compra foram economizados R$" + (precoMercadoria - valorMercadoria));
