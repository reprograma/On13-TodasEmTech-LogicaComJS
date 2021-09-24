/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

   /* let preço = prompt("Digite o preço.");
    console.log(preço);
    let desconto.[]*/
    
    let preco = prompt("Informe o valor do produto."); 
    let desconto = prompt("Informe o valor do desconto"); 
    let finalPreco = parseInt(preco) /100; let total = finalPreco * parseInt(desconto);
    let novoPreco = preco - total; let aviso = alert("O valor do produto é" + novoPreco + "reais"); 
    let economize = alert("Você economizou"  + total+ "  reais");
