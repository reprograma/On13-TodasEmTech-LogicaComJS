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
if (letraEscolhida === "a" || letraEscolhida === "e" || letraEscolhida === "i" || letraEscolhida === "o" || letraEscolhida === "u") {
  console.log("é vogal")
} else {
  console.log("é consoante")
}

switch (letra) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert("é vogal")
    break
  default:
    alert("é consoante")
}
/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");
if (numeroEscolhido === 7) {
  console.log("domingo")
} else if (numeroEscolhido === 6) {
  console.log("sabado")
} else if (numeroEscolhido === 5) {
  console.log("sexta")
} else if (numeroEscolhido === 4) {
  console.log("quinta")
} else if (numeroEscolhido === 3) {
  console.log("quarta")
} else if (numeroEscolhido === 2) {
  console.log("terça")
} else {
  console.log("segunda")
}
/*
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let numero1 = 5
let numbero2 = 2

if (numero1 > numbero2) {
  console.log(numero1);
} else if (numero1 === numbero2) {
  console.log("Os numeros escolhidos são iguais");
} else {
  console.log(numbero2);
}
console.log(2, 2)
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
let nota1 = 2
let nota2 = 2
let nota3 = 2
let media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
  console.log("Parabéns, você foi aprovado, aproveite suas férias!")
} else if (media >= 5) {
  console.log("Você está de recuperação!")
} else {
  console.log("Que pena, você foi reprovado.");
}

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
let numero1 = 5
let numero2 = 10
let maiorValor = numero1 > numero2 ? numero1 : numero2
let menorValor = numero1 < numero2 ? numero1 : numero2
let soma = 0

for (let i = menorValor; i <= maiorValor; i++) {
  soma += i
}
console.log(soma)
