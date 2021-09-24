/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

//1. Solicite o ano de nascimento;
  const IdadeCliente = Number(prompt(`Informe sua idade`));

  /*
  2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      if (IdadeCliente >=18){
        alert (`Pode comprar bebidas`);
      } else{
        alert(`Não está autorizada a venda de álcool para menores`);
      }