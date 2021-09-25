/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let yearBirthday = prompt("Insira aqui o ano que você nasceu");

      let yearToday = 2021;

      let age = yearToday - yearBirthday;
      console.log(age)

      if(age >= 18) {
        alert("Você está autorizado a comprar bebida")
      } else  {
        alert("Desculpe, não estamos autorizados a vender bebida alcoólica para menores de 18")
      }