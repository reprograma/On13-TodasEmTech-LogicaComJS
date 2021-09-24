/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let preco = parseInt(prompt(`Digite o preço do produto (ex: 19.00): `));
    let desconto = parseInt(prompt(`Digite o percentual do desconto (ex: 15)`));

    
    
    let desconto1 = (preco*(desconto/100));
    let preco2 = (preco - desconto1);

    alert(`O preço do produto com desconto é `+ preco2);
    alert(`O valor economizado foi `+ desconto1);

