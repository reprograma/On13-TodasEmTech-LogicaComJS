/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoNascimento = prompt("Digite seu ano de nascimento:");

if (noNascimento <= 1990) {
    alert(`Usuário maior de idade, você pode comprar bebidas`);

} else {
    alert(`Usuário menor de idade, não estamos autorizada a vender álcool para menores!`);
}