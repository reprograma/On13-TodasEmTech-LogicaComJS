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
let numeroUm = Number(prompt("Digite um numero"));
let numeroDois = Number(prompt("Digite um numeros"));
let soma = numeroUm + numeroDois;
// 2. Informe na tela a soma desses números
alert(soma);
// 3. Informe o resultado da subtração desses números
let subtração = numeroUm - numeroDois;
alert(subtração);

// 4. Informe o produto desses números
let produto = numeroUm * numeroDois;
alert(produto);

// 5. Receba dois números inteiros por meio do prompt
let numeroUmInt = parseInt(prompt("Digite um numero"));
let numeroDoisInt = parseInt(prompt("Digite um numero"));
// 6. Informe o resultado da divisão do primeiro pelo segundo
parseInt(alert(numeroUmInt / numeroDoisInt));
// 7. Informe o resto da divisão do primeiro pelo segundo
parseInt(alert(numeroUmInt % numeroDoisInt));
