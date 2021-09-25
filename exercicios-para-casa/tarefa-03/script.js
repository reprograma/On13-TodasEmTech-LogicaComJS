/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

//1.
  let anoNas = prompt("Qual o ano do seu nascimento?");

//2.
  if (anoNas <= 2003){
    alert("A compra de bebidas alcoólicas é liberado!")
  }else{
    alert("A compra de bebidas alcoólicas não será autorizada por ser menor de idade!")
  }
