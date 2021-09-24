/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    
    2. Solicite um percentual de desconto;
    
    3. Informe ao usuário o valor da mercadoria após o desconto;
    
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let preco = prompt("Digite o preço da mercadoria:");
let perc = prompt("Digite a porcentagem do desconto:");

let novoPreco = preco - ((preco * perc) / 100);
alert(`${novoPreco}`);

let desconto = preco - novoPreco;
alert(`${desconto}`);