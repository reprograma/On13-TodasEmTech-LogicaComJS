/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

   let precoMercadoria = parseFloat(prompt("Digite o valor do produto"));

   let desconto = Number(prompt("Digite o percentual de desconto"));

   function economia () {
      const a=  precoMercadoria - (precoMercadoria * (desconto/100));
      const b =  precoMercadoria * (desconto/100);
       
      alert(`Com o desconto, você vai pagar R$${a}. Você acabou de economizar R$${b}.`)
   }

console.log(economia());
