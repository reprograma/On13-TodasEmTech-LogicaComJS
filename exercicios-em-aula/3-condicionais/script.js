/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements
    
    if...else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    Switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/

let letraEscolhida = prompt("insira uma letra qualquer do alfabeto").toLowerCase();

if (letraEscolhida == 'a' || letraEscolhida == 'e' || letraEscolhida == 'i' || letraEscolhida == 'o' || letraEscolhida == 'u') {
  alert("É uma vogal!")
}
else{
  alert("É uma consoante!")
}

// 

switch (letraEscolhida){
  case "a":
    alert("É uma vogal! ");
    break;
  case "e":
    alert("É uma vogal! ");
    break;
  case "i":
    alert("É uma vogal! ");
    break;
  case "o":
    alert("É uma vogal! ");
    break;
  case "u":
    alert("É uma vogal! ");
    break;
  default:
    alert("É uma consoante!");
}

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");

switch (numeroEscolhido){
  case '1':
    alert("Domingo");
    break;
  case '2':
    alert("Segunda");
    break;
  case '3':
    alert("Terça");
    break;
  case '4':
    alert("Quarta");
    break;
  case '5':
    alert("Quinta");
    break;
  case '6':
    alert("Sexta");
    break;
  case '7':
    alert("Sábado");
    break;
  default:
    alert("Valor inválido, tente novamente!");
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let a = Number(prompt("Insira o primeiro valor"));
let b = Number(prompt("Insira o segundo valor"));

if (a > b){
  alert("O maior valor é " + a);
}
if (a < b){
  alert("O maior valor é " + b);
}
  else{
  alert("Os números são iguais") ;
} 


/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média
    e mostre as seguintes mensagens de acordo com cada situação:
  
    Se a media for igual ou maior que 7 - Aprovado
    Se a media for maior e igual a cinco e menor que 7 - Recuperação 
    Se a media for menor que 5 - Reprovado
  
    Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
    Alunos de recuperação devem ver a mensagem: Você está de recuperação!
    Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/