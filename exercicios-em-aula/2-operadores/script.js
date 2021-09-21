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

let number1 = Number(prompt("Digite o primeiro numero: "));

let number2 =  Number(prompt("Digite o segundo numero"));

// 2. Informe na tela a soma desses números

alert(`soma: ${number1+number2}`);

// 3. Informe o resultado da subtração desses números

alert(`subtracao: ${number1-number2}`);

// 4. Informe o produto desses números

alert(`produto: ${number1*number2}`);

// 5. Receba dois números inteiros por meio do prompt

let otherNumber1 = parseInt(prompt("Digite um numero inteiro"));

let otherNumber2 = parseInt(prompt("Digite outro numero inteiro"));

// 6. Informe o resultado da divisão do primeiro pelo segundo

alert(`resultado da divisao entre ${otherNumber1} e ${otherNumber2} é igual a ${otherNumber1/otherNumber2}`);

// 7. Informe o resto da divisão do primeiro pelo segundo

alert(`Resto da divisao entre ${otherNumber1} e ${otherNumber2} é igual a ${otherNumber1%otherNumber2}`);