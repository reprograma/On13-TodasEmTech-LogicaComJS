/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

//Solicitando preço mercadoria
let precoMercadoria = parseFloat(prompt('Informe o preço da mercadoria'));
//Solicitando um precentual de desconto
let percentualDesconto = parseInt(prompt('Informe o percentual de desconto'));

//Valor da quantia do desconto
let valorDoDesconto = (precoMercadoria * percentualDesconto / 100);


//Valor da mercadoria após o desconto
let valorMercadoriaComDesconto = precoMercadoria - valorDoDesconto;
alert(`Seu valor da mercadoria com desconto é ${valorMercadoriaComDesconto} reais! \nVocê economizou ${valorDoDesconto} reais!🙂`);