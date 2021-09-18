/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let greeting = "Olá, mundo!";
console.log(greeting);

// 2. Crie uma variável que armazene seu nome
let myName = "Dardânia Camargos";
console.log(myName);

// 3. Crie uma variável que armazene o ano de seu nascimento
const birthYear = 1994
console.log(birthYear);

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let firstDay = false;
console.log(firstDay)

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
let message = "Meu nome é " + myName + " nasci em " + birthYear;
console.log(message);

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(greeting));
console.log(typeof(myName));
console.log(typeof(birthYear));
console.log(typeof(message));

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let aVariable;
console.log(aVariable);

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let aNull = null;
console.log(aNull)