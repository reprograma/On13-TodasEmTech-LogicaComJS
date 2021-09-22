/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
const message = "Olá mundo"
console.log(message)

// 2. Crie uma variável que armazene seu nome
const myName = "Aida"
console.log(myName)

// 3. Crie uma variável que armazene o ano de seu nascimento
const yearBirthday = 1995
console.log(yearBirthday)

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
const today = false

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(myName + ' ' + yearBirthday + ' ' + today)

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(myName))
console.log(typeof(yearBirthday))
console.log(typeof(today))

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let noValue
console.log(noValue)
console.log(typeof(noValue))

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let something = null
console.log(something)
console.log(typeof(something))