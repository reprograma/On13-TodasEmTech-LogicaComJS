
// Tarefa 02

// 1. Solicite o preço de uma mercadoria;
// 2. Solicite um percentual de desconto;
// 3. Informe ao usuário o valor da mercadoria após o desconto;
// 4. Informe ao usuário qual quantia foi economizada por conta do desconto.

let preco = prompt("Qual o valor da mercadoria? ");
let percent = prompt("Qual o percentual de desconto? ");

let totalDesconto = ((preco * percent) / 100);
let totalMercadoriaDesconto = (preco - totalDesconto);

alert(`Valor da mercadoria com desconto: ${totalMercadoriaDesconto}`);
alert(`O valor do desconto foi: ${totalDesconto}`);




