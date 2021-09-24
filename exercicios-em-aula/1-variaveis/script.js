/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let mensagem = "Olá mundo!"
console.log(mensagem);
// 2. Crie uma variável que armazene seu nome
let nome = "aline"
console.log(nome);

// 3. Crie uma variável que armazene o ano de seu nascimento
let anoNascimento = 1998;
console.log(anoNascimento);

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let hojeFoiOSeuPrimeiroDia = true
console.log(hojeFoiOSeuPrimeiroDia)

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
let nomeEDataDeNascimento = `Esse é meu nome:${nome}, nasci nessa data ${anoNascimento}`
console.log(nomeEDataDeNascimento)

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas

let tiposDeVariaveis = typeof hojeFoiOSeuPrimeiroDia
console.log(tiposDeVariaveis)


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let semValor;
console.log(typeof semValor)

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let valorNulo = null
console.log(typeof valorNulo)
console.log(valorNulo)