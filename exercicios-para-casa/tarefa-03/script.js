/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
*/

let ano = Number(prompt("Digite seu ano de nascimento"));
let idade = 2021 - ano;

if (idade >= 18){
  alert('Você pode comprar bebidas')
}

else(
  alert('Não podemos vender alcool')
)