
//Tarefa 03

//1. Solicite o ano de nascimento;
  let anoNascimento = prompt(('Qual sua idade?'));

//2. Verifique se a pessoa é maior de idade:
  let idade = 18;
  console.log (idade);
  let acesso = idade >= 18;
  
 
//- caso seja, informe na tela que ela pode comprar bebidas;
if (acesso >= 18){
  alert('Permitido consumo de bebida para maiores de 18 anos');
} else if ( acesso< 18) {
   alert('Não Permitido consumo de bebida para menores de 18 anos');
}
//- caso contrário, informe que você não está autorizada a vender álcool para menores.
