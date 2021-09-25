/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
    let contador=0;
    let preco=0;
    let soma=0;
    

        while (contador < 10) {
            preco = parseFloat(prompt("Insira o preço do item: " +contador));
            soma += preco;
            contador++;
            
        }    

            

        alert(`a soma de todos os itens é R$ ${soma}.`);
        