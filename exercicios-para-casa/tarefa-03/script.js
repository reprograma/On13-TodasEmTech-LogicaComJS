/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      //Solicitando ano nascimento
      let anoNascimento = parseInt(prompt("Informe seu ano de nascimento:"));
      const maiorIdade = 18;
      let anoAtual = new Date().getFullYear;
      let idadePessoa = (anoAtual - anoNascimento);
      if (idadePessoa >= maiorIdade) {
        alert("Pode comprar bebidas");
      } else {
        alert("Proibido vender álcool para menores de idade");
      }