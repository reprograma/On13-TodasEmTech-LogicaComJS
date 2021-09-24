/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    //1. Receba o preço de cada um dos 10 itens;
    const produto1 = Number(prompt(`1.Valor do produto`));
    const produto2 = Number(prompt(`2.Valor do produto`));
    const produto3 = Number(prompt(`3.Valor do produto`));
    const produto4 = Number(prompt(`4.Valor do produto`));
    const produto5 = Number(prompt(`5.Valor do produto`));
    const produto6 = Number(prompt(`6.Valor do produto`));
    const produto7 = Number(prompt(`7.Valor do produto`));
    const produto8 = Number(prompt(`8.Valor do produto`));
    const produto9 = Number(prompt(`9.Valor do produto`));
    const produto10 = Number(prompt(`10.Valor do produto`));

    //2. Mostre na tela a soma de todos os preços.

    const produto = (produto1 + produto2 + produto3 + produto4 +produto5 + produto6 + produto7 + produto8 + produto9 + produto10);
    alert(`Valor total ${produto}`);