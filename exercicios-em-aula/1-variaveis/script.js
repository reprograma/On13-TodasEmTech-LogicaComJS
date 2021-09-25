/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let msg = "Olá, Mundo!";
console.log(msg);


// 2. Crie uma variável que armazene seu nome
const nome = "Anne Pinho";
console.log(nome);


// 3. Crie uma variável que armazene o ano de seu nascimento
const nascimento = ("2000");
console.log(nascimento);


// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let contato = false;
console.log(contato);


// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(nome, ", nasci em " + nascimento, "e " + contato);


// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(nome),typeof (nascimento));
console.log ('JS é do tipo' + typeof (contato));

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let qualquer;
console.log(qualquer);
console.log(typeof(qualquer));


// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let nu = null;
console.log(nu);
console.log(typeof(nu));