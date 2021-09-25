/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoNascimento = parseInt(prompt("Informe a data de nascimento: "));

if (anoNascimento >= 18) {
  alert("Você está autorizada a comprar bebidas.");
} else {
  alert("Você NÃO está autorizada a comprar bebidas.");
}
