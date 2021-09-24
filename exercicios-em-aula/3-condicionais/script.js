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

let letraEscolhida = prompt("insira uma letra qualquer do alfabeto");

if (letraEscolhida == "a") {
  alert("você digitou vogal");
} else if (letraEscolhida == "e") {
  alert("você digitou vogal");
} else if (letraEscolhida == "i") {
  alert("você digitou vogal");
} else if (letraEscolhida == "o") {
  alert("você digitou vogal");
} else if (letraEscolhida == "u") {
  alert("você digitou vogal");
} else {
  alert("você digitou consoante");
}

switch (letraEscolhida) {
  case "a":
    alert("você digitou vogal");
    break;
  case "e":
    alert("você digitou vogal");
    break;

  case "i":
    alert("você digitou vogal");
    break;

  case "o":
    alert("você digitou vogal");
    break;

  case "u":
    alert("você digitou vogal");
    break;
  default:
    alert("você digitou consoante");
}
/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("insira um numero qualquer");

switch (numeroEscolhido) {
  case "1":
    alert("Monday");
    break;
  case "2":
    alert("Tuesday");
    break;

  case "4":
    alert("Wednesday");
    break;

  case "5":
    alert("Thursday");
    break;
  case "6":
    alert("Friday");
    break;

  default:
    alert("Sunday");
}

/* 
      3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
    */
// let numeroUm = Number(prompt("insira um numero qualquer"));
// let numeroDois = Number(prompt("insira um numero qualquer"));
// let maior = 0;
// if (numeroUm > numeroDois) {
//   maior = maior + numeroUm;
// } else if (numeroUm < numeroDois) {
//   maior = maior + numeroDois;
// } else {
//   console.log("Os números são iguais");
// }
// console.log(maior);

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

// let notaUm = prompt("insira sua nota");
// let notaDois = prompt("insira sua nota");
// let notaTres = prompt("insira sua nota");
// let media = (notaUm + notaDois + notaTres) / 3;

// if (media >= 7) {
//   alert("Aprovado");
// } else if (media <= 5 && media < 7) {
//   alert("Recuperação");
// } else {
//   alert("reprovado");
// }

/* 5. Crie um algoritmo que receba dois números e some todos os números
        começados no primeiro e terminados no segundo

        Faça duas versões deste exercício: usando for e usando while

        Exemplo:
            se os números informados forem 2 e 7, seu programa deve retornar 27,
            pois 2 + 3 + 4 + 5 + 6 + 7 = 27
    */
