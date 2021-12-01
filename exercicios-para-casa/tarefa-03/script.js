/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso, informe que você não está autorizado a vender álcool para menores.*/
      
      let anoNascimento = Number(prompt("Digite seu ano de nascimento"));

      let permissao = anoNascimento <= 2003 ? alert("Você tem permissão para comprar bebida alcoólica") : alert ("Não é permitida a venda de bebida alcoólica para menores de idade");


