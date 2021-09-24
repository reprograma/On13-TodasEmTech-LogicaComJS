/*Tarefa 03

    1. Solicite o ano de nascimento;
    //2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

  let anoNascimento = prompt("Qual o ano de seu Nascimento?").toLowerCase();
switch (numeroEscolhido) {

  let anoNascimento = 2005;

// Condição
  if (anoNascimento <= 2004) {
  // Ação
  alert("Lamentamos, mas devido à sua idade não podemos vender bebidas alcoólicas");
} else if (anoNascimento >= 2005) {
  // Ação
  alert("Permitida a venda de bebidas alcoólicas");
} else {
alert("Não achei sua condição.");
}


  let idade = 18;
console.log (idade);
  let acesso = idade >= 18;

  if (acesso >= 18){
alert('Permitido consumo de bebida para maiores de 18 anos');
} else if ( acesso< 18) {
  alert('Não Permitido consumo de bebida para menores de 18 anos');
  }
