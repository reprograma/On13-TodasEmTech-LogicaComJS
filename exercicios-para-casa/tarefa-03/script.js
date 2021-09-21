/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoNascimento = parseInt(prompt("Ano de nascimento: "));

new Date().getFullYear() - anoNascimento >= 18 ? alert('Maior de idade, venda de bebida alcoolica autorizada') : alert("Menor de idade, venda de bebida alcoolica não autorizada ");