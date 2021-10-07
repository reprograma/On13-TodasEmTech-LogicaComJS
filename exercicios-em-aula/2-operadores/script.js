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
let firstNumber = Number(prompt ("por favor insira um número"));
let secondNumber = Number(prompt ("agora insira um segundo número"));

// 2. Informe na tela a soma desses números
let soma = Number(firstNumber + secondNumber);
alert ("A soma é " + (soma));

// 3. Informe o resultado da subtração desses números
let sub = Number(firstNumber - secondNumber);
alert (`a diferença é ${firstNumber} - ${secondNumber} = ${sub}`);

// 4. Informe o produto desses números
let mult = Number(firstNumber * secondNumber);
alert (mult); 

// 5. Receba dois números inteiros por meio do prompt
let numeroInteiro1 = parseInt(prompt ("insira um número inteiro"));
let numeroInteiro2 = parseInt(prompt ("insira um segundo número inteiro"));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let div = Number(numeroInteiro1 / numeroInteiro2);
alert (div);

// 7. Informe o resto da divisão do primeiro pelo segundo
let resto = firstNumber % secondNumber;
alert ('o resto da divisão é ' + (resto));
