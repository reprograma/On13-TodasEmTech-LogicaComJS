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
let a = Number(prompt('Digite um número'));
let b = Number(prompt('Digite um número'));

// 2. Informe na tela a soma desses números
let soma = a + b;
//alert(soma);
alert(`${a} + ${b} = ${soma}`);


// 3. Informe o resultado da subtração desses números
let diff = a - b;
//alert(diff);
alert(`${a} - ${b} = ${diff}`);

// 4. Informe o produto desses números
let times = a * b;
//alert(times);
alert(`${a} * ${b} = ${times}`);

// 5. Receba dois números inteiros por meio do prompt
let c = parseInt(prompt('Digite um número'));
let d = parseInt(prompt('Digite um número'));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let div = c /d;
//alert(div);
alert(`${c} / ${d} = ${div}`);
// 7. Informe o resto da divisão do primeiro pelo segundo
let mod = c % d;
//alert(rest);
alert(`${c} % ${d} = ${mod}`);