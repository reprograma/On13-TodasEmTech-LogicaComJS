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
let a = Number(prompt("insira um número")); 
// 14.97
let b = Number(prompt("outro número")); 
// 9.27


// 2. Informe na tela a soma desses números
let soma = a + b;
alert("A soma é" + soma);
alert(`${a}`)

// 3. Informe o resultado da subtração desses números
let diff = a - b;
alert("A diferença é" + diff)

// 4. Informe o produto desses números

let prod = a * b;
alert(`${a} * ${b} = ${prod}`);
// 5. Receba dois números inteiros por meio do prompt
let c = perseInt(prompt(Digite um numero));
let d = perseInt(prompt(digite outro numero));


// 6. Informe o resultado da divisão do primeiro pelo segundo
let div = c / d;
alert=(`${c} / ${b} = ${div}`);


// 7. Informe o resto da divisão do primeiro pelo segundo
let mod = c % d;
alert(`${c} % ${d} = ${mod}`);
