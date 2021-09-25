/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */


let nascimento = prompt("Digite seu ano de nascimento");
let idade = 2021 - anoDeNascimento;

if (idade <= 18) {
    alert("Você ainda anão pode comprar bebida");
} else {
    alert("Não vendemos para menores de idade");
}