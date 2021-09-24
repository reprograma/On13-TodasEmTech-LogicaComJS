/**
    Tarefa 02
 */

// 1. Solicite o preço de uma mercadoria;

let preco = prompt("Digite o valor da mercadoria");

// 2. Solicite um percentual de desconto;

let desconto = prompt("Digite o desconto %");

// 3. Informe ao usuário o valor da mercadoria após o desconto;

let valorComDesconto = preco - desconto ;
alert(` Valor da mercadoria com o desconto é de ${valorComDesconto}`);

// 4. Informe ao usuário qual quantia foi economizada por conta do desconto.

let economia = ((preco * desconto) / 100);
alert(` Você economizou ${economia}`);
