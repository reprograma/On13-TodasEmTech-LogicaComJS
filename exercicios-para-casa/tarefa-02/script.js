/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

//1.
    let preco = Number(prompt("Qual o preço da mercadoria?"));

//2.
    let percen = Number(prompt("Qual o percentual de desconto?"));

//3.
    let desconto =  (preco * (percen/100));
    let econo = (preco - desconto);
    let precoFinal = alert("O valor após a aplicação do desconto é de R$" + econo + ",00");

//4.
    let valorEcono = alert("O valor economizado foi de R$" + desconto + ",00");
