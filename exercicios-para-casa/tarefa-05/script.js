/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let qtd= parseInt(prompt(`insira o numero de itens da lista:`));
    let soma=0;
    let contador=1;
    let preco=0;

    while  (contador <= qtd) {
        preco = parseFloat(prompt("Insira o preço do item: " +contador));
        soma += preco;
        contador++;
    }

    alert(`a soma de todos os itens é R$ ${soma}.`);
