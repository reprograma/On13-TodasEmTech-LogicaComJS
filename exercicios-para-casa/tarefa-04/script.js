/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */


//  TRABALHO DESNECESSÁRIO MAS PENSEI ASSIM PRIMEIRO

// let precos = [];

// let somaPrecos = 0;


// for(let i=0; i <10; i++) {
//     precos.push(Number(prompt("Escreva o preço")));
// };

// for(let item = 0; item < precos.length; item++) {
//     somaPrecos += precos[item];
// }

// alert("A soma total é: " + somaPrecos); 



// A FORMA "CORRETA"


let somaPrecos = 0;


for(let i=0; i <10; i++) {
const precos = Number(prompt("Escreva o preço do item"));
somaPrecos += precos; 
};

alert("A soma total é: " + somaPrecos); 