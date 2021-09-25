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
let firstNumber = Number(prompt("insira um número"))
let secondNumber = Number(prompt("insira outro número"))

// 2. Informe na tela a soma desses números
let soma = firstNumber + secondNumber
alert(`O resultado da soma desses dois números é: ${soma}`)

// 3. Informe o resultado da subtração desses números
let subtracao = firstNumber
alert(`A resultado da subtração desse números é: ${subtracao}`)

// 4. Informe o produto desses números
let produto = firstNumber * secondNumber
alert(`O produto desses número é: ${produto}`)

// 5. Receba dois números inteiros por meio do prompt
let number1 = parseInt(prompt("Insira um número"))
let number2 = parseInt(prompt("Insira outro número"))

// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisao = number1 / number2
alert(`O resultado da divisão desses número é: ${divisao}`)

// 7. Informe o resto da divisão do primeiro pelo segundo
let resto = number1 % number2
alert(`O resto da divisão desses números é: ${resto}`)