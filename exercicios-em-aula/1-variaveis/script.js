/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let mensagem = 'Olá, Mundo!';
console.log(mensagem);

// 2. Crie uma variável que armazene seu nome
let nome = 'Natália';
console.log(nome)

// 3. Crie uma variável que armazene o ano de seu nascimento
const anoNascimento = 1993; //const pois o ano de nascimento não mudará
console.log(anoNascimento);

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let primeiroContato = 'hoje';
let hojePrimeiroContato = primeiroContato == 'hoje';
console.log(hojePrimeiroContato);

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log('Olá! Meu nome é ' + nome + ', nasci no ano de ' + anoNascimento + ' e ' + primeiroContato + ' foi meu primeiro contato com javaScript :)');

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof nome, typeof anoNascimento, typeof primeiroContato, typeof hojePrimeiroContato);


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let a;
console.log(a);
console.log(typeof(a));

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let b = null;
console.log(b);
console.log(typeof(b));