/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    /*let item1 = parseFloat(prompt("Digite o preço deste item"));
    let item2 = parseFloat(prompt("Digite o preço deste item"));
    let item3 = parseFloat(prompt("Digite o preço deste item"));
    let item4 = parseFloat(prompt("Digite o preço deste item"));
    let item5 = parseFloat(prompt("Digite o preço deste item"));
    let item6 = parseFloat(prompt("Digite o preço deste item"));
    let item7 = parseFloat(prompt("Digite o preço deste item"));
    let item8 = parseFloat(prompt("Digite o preço deste item"));
    let item9 = parseFloat(prompt("Digite o preço deste item"));
    let item10 = parseFloat(prompt("Digite o preço deste item"));

    let valorTotal = item1+item2+item3+item4+item5+item6+item7+item8+item9+item10
        alert(`O valor total da sua compra foi de R$${valorTotal}`)*/


        
    let soma = 0;    
    for (let i = 1; i<=10; i++){
        const valor = parseFloat(prompt("Insira o valor do item"));
        soma += valor;
    }
    
        alert(`O total da sua compra foi R$${soma}`);


