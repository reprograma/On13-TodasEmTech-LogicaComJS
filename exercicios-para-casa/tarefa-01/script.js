/**
    Tarefa 01

    1. Crie duas variáveis para armazenar o nome de usuário e a senha dentro do script;
    2. Use um `prompt` para pedir ao usuário seu nome e armazene o resultado numa variável;
    3. Use outro `prompt` para pedir ao usuário sua senha e a armazene em outra variável;
    4. Verifique se o nome de usuário e a senha estão corretos:
      a. caso afirmativo, cumprimente o usuário com um `Bom dia!` por meio de um `alert`;
      b. caso as credenciais estejam erradas, informe o usuário
      (aqui não precisamos pedir as credenciais novamente; podemos finalizar normalmente)
      */

//1. 
let nome = prompt("Qual o seu nome?");
let senha = prompt("Qual a sua senha?");

//2
let nomeUso = prompt("Qual o seu nome?");
console.log(nomeUso);

//3
let senhaUso = prompt("Qual a sua senha?");
console.log(senhaUso);

//4
let nomeU = "gisele";
let senhaU = "aa";

let nomeUs = prompt("Qual o seu nome?");
let senhaUs = prompt("Qual a sua senha?");

if (nomeU === nomeUs && senhaU === senhaUs) {
  alert("Bom dia!")
} else {
  alert("Aqui não precisamos pedir as credenciais novamente; podemos finalizar normalmente.")
}
