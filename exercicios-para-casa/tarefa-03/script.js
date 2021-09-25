/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

const nascimento = Number(prompt("Digite o ano de seu nascimento: "));
const idade = 2021 - nascimento;
if (idade >= 18) {
  alert("Você pode comprar bebidas");
} else {
  alert("Você não pode comprar bebidas");
}
