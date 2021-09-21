/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let qtdItens = parseInt(prompt("Digite a quantidade de Itens da compra: "));
    let itens = [qtdItens];
    let total = 0;

    for(let i=0; i<qtdItens; i++){

        itens[i] = parseFloat(prompt(`Digite o valor do ${i+1}° item`));
        total+= itens[i];
    }

    alert(`Total da Compra R$ ${total}`);