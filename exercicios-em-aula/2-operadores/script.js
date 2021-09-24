/**
    Documentação para consulta
    
    Expressões e operadores
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

    Objetos globais
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects

    Window
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window
 */


// 1. Receba dois números por meio do prompt

let number1 = Number(prompt("Digite um numero:"))
let number2 = Number(prompt("Digite o outro numero:"))

// 2. Informe na tela a soma desses números

alert(`A soma de ${number1} + ${number2} é ${number1 + number2}`)


// 3. Informe o resultado da subtração desses números


alert(`A subtração de ${number1} - ${number2} é ${number1 - number2}`)

// 4. Informe o produto desses números

alert(`A multiplicação de ${number1} X ${number2} é ${number1 * number2}`)

// 5. Receba dois números inteiros por meio do prompt

let numberInt1 = parseInt(prompt("Digite um número:"))
let numberInt2 = parseInt(prompt("Digite o outro numero:"))

// 6. Informe o resultado da divisão do primeiro pelo segundo

alert(`A divisão de ${numberInt1} / ${numberInt2} é ${numberInt1 / numberInt2}`)

// 7. Informe o resto da divisão do primeiro pelo segundo

alert(`O resto da divisão de ${numberInt1} e ${numberInt2} é ${numberInt1 % numberInt2}`)