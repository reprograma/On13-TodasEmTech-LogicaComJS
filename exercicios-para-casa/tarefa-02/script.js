/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


/**1*/
let valorMercadoria = Number(prompt("Digite o preço (somente números) do produto"));

/**2*/
let porcentagemDesconto = Number(prompt("Digite o percentual de desconto (somente números) do produto"));

/**3*/
let valordoDesconto = valorMercadoria * (porcentagemDesconto / 100);
let valorFinal = valorMercadoria - valordoDesconto;
alert('Este é o preço final: ' + valorFinal);

/**4*/
alert('Você economizou: ' + valordoDesconto);