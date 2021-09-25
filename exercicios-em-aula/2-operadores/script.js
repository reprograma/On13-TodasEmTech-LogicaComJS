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
let number1 = Number(prompt("digite um numero: "));
let number2 = Number(prompt("digite outro numero: "));



// 2. Informe na tela a soma desses números
let soma = number1 + number2;
alert(`A soma de ${number1} + ${number2} = ${soma}`);


// 3. Informe o resultado da subtração desses números
let sub = number1 - number2;
alert(`A subtração de ${number1} - ${number2}= ${sub}`);


// 4. Informe o produto desses números
let prod = number1 * number2;
alert(`A multiplicaçao de ${number1} x ${number2}= ${prod}`);

// 5. Receba dois números inteiros por meio do prompt
let a = parseInt(prompt("Digite um numero inteiro: "));
let b = parseInt(prompt("Digite outro numero inteiro: "));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let div = a / b;
alert(`A divisão do primeiro pelo segundo é: ${div}`);

// 7. Informe o resto da divisão do primeiro pelo segundo
let mod = a % b;
alert(`O resto da divisão de ${a} por ${b} é: ${mod}`);