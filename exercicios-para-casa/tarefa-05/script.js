/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let itens = parseInt(prompt("Insira a quantidade de itens da compra"));
    let soma = 0;

    for (let i = 1; i <= itens; i++){
        const valor = parseFloat(prompt("Insira o valor do item"));
        soma += valor;
    }

    alert(`O total da sua compra foi R$${soma}`);

   

    let c = 1;
    soma = 0;
    while (c <= itens) {
        const valor = parseFloat(prompt("Insira o valor do item"));
        soma += valor;
        ++c;
    }
    alert(`O total da sua compra foi R$${soma}`);
    
   

   

  
 

