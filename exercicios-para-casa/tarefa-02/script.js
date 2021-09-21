/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let precoMercadoria = parseFloat(prompt('Digite o preço da cesta básica'));
let percentualDesconto = parseInt(prompt('Digite o percentual de desconto (apenas numeros): ')); 

let desconto = precoMercadoria * percentualDesconto / 100;

alert(`Valor da mercadoria com desconto: R$ ${precoMercadoria - desconto}`);
alert(`Quantia economizada: R$ ${desconto}`);

