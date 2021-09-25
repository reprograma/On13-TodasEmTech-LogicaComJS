/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let valorPago = 0, totalConta = 0, troco = 0;

    valorPago = parseInt(prompt("Informe a quantia em dinheiro dada pelo cliente: "));
    totalConta = parseInt(prompt(" Informe o total da conta do cliente: "));

    if (valorPago == totalConta){
        alert("O valor pago está certo, obrigado.");
    } else if (valorPago > totalConta) {
        troco = valorPago - totalConta;
        alert(`O seu troco é ${troco},00`);
    }