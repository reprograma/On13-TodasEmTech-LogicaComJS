/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

const anoNascimento = parseInt(prompt('Insira seu ano de nascimento:'))

if (2020 - anoNascimento > 18) {
  alert('Você está apta a comprar bebidas.')
}
else {
  alert('Não estou autorizada a vender álcool para menores.')
}