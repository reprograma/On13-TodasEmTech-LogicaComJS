/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let birthYear = Number(prompt('Digite o ano que você nasceu'));
      let age = 2021 - birthYear;
      if (age>=18) {
        alert ( 'Você pode comprar bebidas');
      }
      else{
        alert ('Não podemos vender álcool para menores');
      }
