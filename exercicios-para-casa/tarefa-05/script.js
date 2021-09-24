/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let i = parseInt(
      prompt("Insira a quantidade de itens que serão comprados:")
    );
    let precoItens = 0;
    soma = 0;

    for (let j = 0; j < i; j++) {
      precoItens = parseFloat(prompt("Insira o valor do produto em reais:"));
      soma += precoItens;
    }

    alert(`O total gasto na compra será: R$ ${soma}.`);