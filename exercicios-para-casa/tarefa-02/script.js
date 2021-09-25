/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let mercadoria = Number (prompt ("valor da mercadoria"));
    let desconto = Number (prompt("desconto da mercadoria"));

    let valor = (mercadoria * desconto) / 100;

    alert("seu valor é " + valor); 

    let economia =  mercadoria - valor;
    alert("Você ecomizou " + economia);









