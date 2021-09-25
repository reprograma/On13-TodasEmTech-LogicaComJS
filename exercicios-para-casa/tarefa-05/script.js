/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let quantity = Number(prompt("Insira a quantidade de itens da sua compra"));

    let sum = 0

    for (let i = 0; i < quantity; i++) {
        let price = Number(prompt(`Insira o preço do item`));
         sum += price;
     }

     alert(`O total da sua compra é: ${sum}`)
    
