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

    let userName = 'vitoriaschaumann';
    let password = '7301100225960';

    let entryName = prompt('insira seu nome de usuário');
    let entryPassword = prompt('insira sua senha');

    if (entryName == userName && entryPassword == password) {
      alert('Bom dia!')
    } else {
      alert('precisamos pedir suas credenciais novamente')
    }

    

