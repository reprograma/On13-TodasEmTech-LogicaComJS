/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */

/* 
  1. Utilizando a estrutura de repetição for, mostre no console todos números 0 ao 100,
  inclusive esses 2
*/
let cont

for (cont = 0; cont <= 100; cont++) {
  console.log(cont)
}
/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele!
*/

for (cont = 1; cont <= 50; cont ++) {
  if(cont%2===0){
  console.log('numero par:', cont)
  }
}

/*
  3. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
let num1 = parseInt(prompt('Digite um numero'));
let num2= parseInt(prompt('Digite outro numero'));

let soma=0;

for(cont=num1; cont<=num2; cont++){

  soma+=cont;

}

alert(`soma de ${num1} e ${num2} : ${soma}`);

let j = num1;
soma=0;

while(num1<=num2){
  soma+=j;
  ++j;
}

alert(`soma de ${num1} e ${num2} : ${soma}`);
