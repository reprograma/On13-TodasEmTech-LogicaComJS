/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
 
    
    //1. Informe a quantia em dinheiro dada pelo cliente;
    const ValorRecebido = Number(prompt(`Valor Recebido`));

    //2. Informe o total da conta do cliente;
    const ValorCompra = Number(prompt(`Valor total de compra`));

    //3. Exiba uma mensagem com o valor do troco.
    const Troco = (ValorRecebido) - (ValorCompra);
    alert(`Troco ${Troco}`);