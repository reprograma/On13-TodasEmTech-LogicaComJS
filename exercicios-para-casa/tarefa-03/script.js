/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoDeNascimento = prompt ('Insira seu ano de nascimento: ')

if (anoDeNascimento <= 2003){
  alert ('Você pode comprar bebidas alcoolicas!')
} else{
  alert ('Você NÃO pode comprar bebidas alcoolicas por ter menos de 18 anos!')
}
