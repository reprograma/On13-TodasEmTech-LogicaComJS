/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let produto1 = parseInt(prompt("Informe o preço do produto 1"));
    let produto2 = parseInt(prompt("Informe o preço do produto 2"));
    let produto3 = parseInt(prompt("Informe o preço do produto 3"));
    let produto4 = parseInt(prompt("Informe o preço do produto 4"));
    let produto5 = parseInt(prompt("Informe o preço do produto 5"));
    let produto6 = parseInt(prompt("Informe o preço do produto 6"));
    let produto7 = parseInt(prompt("Informe o preço do produto 7"));
    let produto8 = parseInt(prompt("Informe o preço do produto 8"));
    let produto9 = parseInt(prompt("Informe o preço do produto 9"));
    let produto10 = parseInt(prompt("Informe o preço do produto 10"));
    
    let resultado = parseInt(produto1) + parseInt(produto2) + parseInt(produto3) + parseInt(produto4) + parseInt(produto5) + parseInt(produto6) + parseInt(produto7) + parseInt(produto8) + parseInt(produto9) + parseInt(produto10);
    document.write("O total foi" + " " + resultado);