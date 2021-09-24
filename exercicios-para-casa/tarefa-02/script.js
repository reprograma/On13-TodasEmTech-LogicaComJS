/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let precoMercadoria = parseFloat(prompt('Qual o preço da mercadoria em reais?'))
let percentualDesconto = Number(prompt('Qual o percentual de desconto?'))

alert(`O valor da mercadoria após o desconto será 
R$ ${precoMercadoria - (precoMercadoria*(percentualDesconto/100))} e você economizará R$ ${precoMercadoria*(percentualDesconto/100)}.`)