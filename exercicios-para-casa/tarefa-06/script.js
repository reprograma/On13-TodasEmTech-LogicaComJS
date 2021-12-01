/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

   let recebidoCliente = parseFloat(prompt("Insira o valor recebido do cliente"));
   let totalConta = parseFloat(prompt("Insira o valor total da conta do cliente"));

    const troco = recebidoCliente - totalConta
    alert (`Você gastou R$${totalConta}. O seu troco foi R$${troco}`) 

   