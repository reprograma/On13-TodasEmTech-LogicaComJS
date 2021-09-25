/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
let dinheiro = Number(prompt("Insira a quantia em dinheiro dada pelo cliente para pagamento:"));
let totalConta = Number(prompt("Informe o valor total da compra do cliente:"));
let troco = dinheiro - totalConta;
Number(alert(`O valor do troca a ser devolvido é: ${troco}`));