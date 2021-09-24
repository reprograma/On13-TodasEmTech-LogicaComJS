/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */


      var nascimento = prompt("Qual seu ano de nascimento?");
      if (nascimento <= 2003) {
      alert("Você pode comprar bebidas alcoólicas");
      } else {
      alert("Você não pode comprar bebidas alcoólicas, apenas maiores de 18 anos");
      }