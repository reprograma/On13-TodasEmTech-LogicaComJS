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
let aNumber = Number(prompt("Insira o primeiro número"));
let bNumber = Number(prompt("Insira o segundo número"));

// 2. Informe na tela a soma desses números
let additionResult = aNumber + bNumber;
alert(additionResult);

// 3. Informe o resultado da subtração desses números
let subtractionResult = aNumber - bNumber;
alert(subtractionResult);

// 4. Informe o produto desses números
let mResult = aNumber * bNumber;
alert(mResult);

// 5. Receba dois números inteiros por meio do prompt
let cNumber = parseInt(prompt("Insira um número inteiro"));
let dNumber = parseInt(prompt("Insira um número inteiro"));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisionResult = cNumber / dNumber;
alert(divisionResult);

// 7. Informe o resto da divisão do primeiro pelo segundo
let rResult = cNumber % dNumber;
alert(rResult);