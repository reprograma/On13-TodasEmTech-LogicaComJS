/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


    let preco = prompt("Digite o valor da mercadoria");
    let desconto = prompt("Digite o desconto %");
   
    let economia = preco * desconto / 100;
    
    alert(`economia: R$ ${desconto}`);


    



