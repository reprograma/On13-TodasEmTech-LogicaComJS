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

let letraEscolhida = prompt(
  'insira uma letra qualquer do alfabeto'
).toLowerCase()

if (
  letraEscolhida == 'a' ||
  letraEscolhida == 'e' ||
  letraEscolhida == 'i' ||
  letraEscolhida == 'o' ||
  letraEscolhida == 'u'
) {
  alert('vogal')
} else {
  alert('consoante')
}

switch (letraEscolhida) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    alert('vogal')
    break
  default:
    alert('consoante')
}
//

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = parseInt(prompt('Insira um numero de 1-7'));

switch (numeroEscolhido) {
  case 1:
    alert('Segunda')
    break
  case 2:
    alert('Terça')
    break
  case 3:
    alert('Quarta')
    break
  case 4:
    alert('Quinta')
    break
  case 5:
    alert('Sexta')
    break
  case 6:
    alert('Sabado')
    break
  case 7:
    alert('Domingo')
    break;
    default: alert('o numero digitado não corresponde a  um dia da semana');
}
/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

let number1 = Number(prompt('insira um numero'))
let number2 = Number(prompt('insira outro numero'))

if (number1 > number2) {
  alert(`o numero ${number1} e o maior`)
} else if (number2 > number1) {
  alert(`o numero ${number2} e o maior`)
} else {
  alert('os dois numeros são iguais')
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

let nota1 = parseFloat(prompt('insira a primeira nota'))

let nota2 = parseFloat(prompt('insira a segunda nota'))

let nota3 = parseFloat(prompt('insira a terceira nota'))

media = (nota1 + nota2 + nota3) / 3

if (media >= 7) alert('aprovado')
else if (media >= 5 && media < 7) alert('recuperacao')
else alert('reprovado')
