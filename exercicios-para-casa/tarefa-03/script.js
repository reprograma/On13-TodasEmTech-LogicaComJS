/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

/**1 */
const anoNascimento = Number(prompt('Digite o ano que você veio ao mundo:'));


/**2 */
let idade = 2021 - anoNascimento;

if (idade >= 18) {
    alert('Bebida alcoólica autorizada/Seja feliz!');
} else {
    alert('Loja não autorizada a vender bebidas alcoólicas para menores de 18 anos.');
}