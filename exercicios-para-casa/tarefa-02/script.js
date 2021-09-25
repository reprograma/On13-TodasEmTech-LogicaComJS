/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
*/

let Preco = Number(prompt('Informe o valor do produto: '));

let Percentual = Number(prompt('Informe o percenual de desconto: '));

let Desconto = Preco * Percentual / 100;
let Resultado = Preco - Desconto;

alert('O valor com desconto é R$${Resultado}');

let novoValor = (Preco - Resultado);
alert('Você economizou R$${novoValor}')