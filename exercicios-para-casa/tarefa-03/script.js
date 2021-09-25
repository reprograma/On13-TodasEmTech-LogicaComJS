/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let yearBorn = prompt("Insira seu ano de nascimento:");
const anoAtual = (2021);

if (anoAtual - yearBorn >= 18){
  alert("Cliente maior de idade, venda de bebida autorizada!");
}
else{
  alert("Cliente menor de idade, venda de bebida NÃO autorizada!");
}