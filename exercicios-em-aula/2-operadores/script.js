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
let num1 = Number(prompt('Insira um número:'));
let num2 = Number(prompt('Insira outro número:'));

// 2. Informe na tela a soma desses números
let soma = num1 + num2;
alert(`A soma é: ${soma}`); // template strings

// 3. Informe o resultado da subtração desses números
let subtracao = num1 - num2;
alert(`A subtração é: ${subtracao}`);

// 4. Informe o produto desses números
let produto = num1 * num2;
alert(`${num1} * ${num2} = ${produto}`);

// 5. Receba dois números inteiros por meio do prompt
let num3 = parseInt(prompt('Insira um número: '));
let num4 = parseInt(prompt('Insira outro número: '));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisao = num3 / num4;
alert(`${num3} / ${num4} = ${divisao}`);

// 7. Informe o resto da divisão do primeiro pelo segundo
let mod = num3 % num4;
alert(`${num3} % ${num4} = ${mod}`);