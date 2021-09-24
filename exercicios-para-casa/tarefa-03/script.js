/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */



      let ano = prompt("Digite seu ano de nascimento");
      if(ano <= 2003){
        alert(`Você pode comprar bebidas!`);
    } else {
        alert(`Não posso vender álcool para menores de 18 anos.`);
    } 