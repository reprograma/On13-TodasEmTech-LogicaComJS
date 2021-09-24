/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoDeNascimento = prompt("Qual o teu ano de nascimento?")
let currentYear = new Date().getFullYear();
let resultadoDaIdade = currentYear - anoDeNascimento
let maiorDeIdade = resultadoDaIdade >= 18 ? alert("Você pode comprar bebidas") : alert("Desculpa, mas não podemos vender bebidas para menores")
