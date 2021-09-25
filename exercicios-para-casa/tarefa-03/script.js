/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoDeNascimento = (prompt("Digite o ano que você nasceu: ")); 

if (anoDeNascimento > 2003){
  alert(`Sem autorização de vendas para menores de 18`)
} else {
  alert(`Você pode comprar bebidas`)
}
