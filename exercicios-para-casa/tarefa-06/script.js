/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    //Quantida de dinheiro dada pelo cliente
    let valorPago = parseFloat(prompt("Valor que o cliente pagou"));
    console.log(`O valor que o cliente pagou foi ${valorPago} reais`);
    //Valor total da conta do cliente
    let totalConta = parseFloat(prompt("Sua conta deu "));
    console.log(`A conta total do cliente deu ${totalConta} reais`);
    //Valor do troco
    let troco = (valorPago - totalConta);
    alert(`Seu troco foi ${troco} reais!`);
    console.log(`O troco do cliente foi ${troco} reais`);