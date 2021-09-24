/**
    Tarefa 05
 */

    // 1. Solicite a quantidade de itens na compra;

   const itens = prompt("Informe quantos itens você pegou?");

    // 2. Receba o valor de cada um dos itens da compra;

   const valor1 = Number(prompt("Valor do item 1"));
   const valor2 = Number(prompt("Valor do item 2"));
   const valor3 = Number(prompt("Valor do item 3"));
   const valor4 = Number(prompt("Valor do item 4"));
   const valor5 = Number(prompt("Valor do item 5"));

    // 3. Informe o total gasto na compra.

    const totalGasto = (valor1 + valor2 + valor3 + valor4 + valor5);
    alert(`Valor total gasto foi ${totalGasto}`);
