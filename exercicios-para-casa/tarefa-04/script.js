   /**
       Tarefa 04

      1. Receba o preço de cada um dos 10 itens;
      2. Mostre na tela a soma de todos os preços.
   */

   //criar variável valorTotal
   let valorTotal = 0;

   for (let i = 0; i < 10; i++) {
      console.log("Passo " + i);
      let valorProduto = parseFloat(prompt("Digite o valor do produto " + i));
      console.log("Valo do produto " + valorProduto);
      valorTotal = (valorTotal + valorProduto);
      console.log("Valor total atualizado " + valorTotal);
      alert(`O valor total é ${valorTotal}`);
   }

   