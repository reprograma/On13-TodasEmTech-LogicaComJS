/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let anoDeNascimento = Number(prompt("Digite o ano do seu nascimento"));
      let idade = 2021 - anoDeNascimento;

      if (idade >= 18){
        alert("Liberado para bebidas");
      }

      else{
        alert("Proibido venda de alcool para menores");
      }