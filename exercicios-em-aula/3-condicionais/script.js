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

    if (letraEscolhida == 'a' || letraEscolhida == 'e'|| letraEscolhida == 'i' || letraEscolhida == 'o' || letraEscolhida == 'u') {
      alert ("essa letra é uma vogal!")
    } else {
      alert ("essa letra é uma consoante")
    }

switch (letraEscolhida) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    alert ("essa letra é uma vogal");
    break;

  default:
    alert ("essa letra é uma consoante");
}   
    
// 

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numero = Number(prompt("insira um número de 1-7"))

if (numero == 1){
  alert('domingo')
} else if (numero == 2) {
  alert('segunda');
} else if (numero == 3) {
  alert('terça');
} else if (numero == 4) {
  alert('quarta');
} else if (numero == 5) {
  alert('quinta');
} else if (numero == 6) {
  alert('sexta');
} else if (numero == 7) {
  alert('sábado');
} else {
  alert ("por favor, insira um número válido!")
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
const numero1 = Number(prompt("insira um número"));
const numero2 = Number(prompt("insira um segundo número"));

if (numero1 > numero2) {
  alert (`${numero1} é maior que ${numero2}`)
} else if (numero1 < numero2) {
  alert (`${numero2} é maior que ${numero1}`)
} else {
  alert ('os números são iguais')
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

const primeiraNota = Number(prompt("insira a primeira nota"));
const segundaNota = Number(prompt('insira a segunda nota'));
const terceiraNota = Number(prompt('insira a terceira nota'));

let soma = (primeiraNota + segundaNota + terceiraNota);
let media = ((soma) / 3)

if (media >= 7) {
  alert ('parabéns, você foi aprovado, aproveite suas férias!')
} else if (media >= 5 && media < 7) {
  alert ('você está de recuperação!')
} else {
  alert ('que pena, você foi reprovado')
}