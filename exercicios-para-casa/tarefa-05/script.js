/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
    let somaPrecos = 0;


    for(let i=0; i <10; i++) {
    const precos = Number(prompt("Escreva o preço do item"));
    somaPrecos += precos; 
    };
    
    alert("A soma total é: " + somaPrecos);