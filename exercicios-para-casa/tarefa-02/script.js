/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let valor = prompt("Informe o preço do produto");

    let desconto = prompt("Informe o percentual de desconto");
    
    let valorFinal = parseInt(valor) / 100; 
    let resultado = valorFinal * parseInt(desconto);

    let novoValor = valor - resultado;
    let Infor = alert("O novo valor do produto é " + novoValor + " reais");
    let economia = alert("Você economizou " + resultado + " reais")