/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */


/**1 */
let quantidadeItens = Number(prompt("Digite a quantidade de itens na compra aqui:"));

/**2 */
let contador = 1;
soma = 0;
while (contador <= quantidadeItens) {
    let valorItens = Number(prompt("Digite o valor de cada produto por vez (somente números)"));
    ++contador;
    soma += valorItens;
}

alert('o valor final da sua compra é: ' + soma);