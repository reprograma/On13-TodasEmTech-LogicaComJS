/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let mercadoriaPreco = Number(prompt("Insira o preço da mercadoria"));
let desconto = Number(prompt("Insira o percentual do desconto"));

let resultado = (mercadoriaPreco * desconto)/100; 
alert("O valor da mercadoria é:" + resultado);

let quantiaEconomizada = (mercadoriaPreco - resultado);
alert("A quantia economizada foi de: " + quantiaEconomizada);



