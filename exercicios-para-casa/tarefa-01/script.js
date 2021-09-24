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

      //1. Crie duas variáveis para armazenar o nome de usuário e a senha dentro do script;
      let ArmazenarUsuario = "thamyreslais";

      let ArmazenarSenha = "escle54";
      
      
      
      //2. Use um `prompt` para pedir ao usuário seu nome e armazene o resultado numa variável;

      let NomeUsuario = prompt('Digite o nome de usuário');
      console.log(NomeUsuario);

      //3. Use outro `prompt` para pedir ao usuário sua senha e a armazene em outra variável;

      let SenhaUsuario = prompt('Digite a senha');
      console.log(SenhaUsuario);

    /*4. Verifique se o nome de usuário e a senha estão corretos:
      a. caso afirmativo, cumprimente o usuário com um `Bom dia!` por meio de um `alert`;
      b. caso as credenciais estejam erradas, informe o usuário
      (aqui não precisamos pedir as credenciais novamente; podemos finalizar normalmente)
    */

      if (NomeUsuario == `thamyreslais`){
        alert (`Bom dia!`);
      } else{
        alert (`Usuário inválido`);
      }

      if (SenhaUsuario != `escle54`){
        alert (`Senha inválida`);
      }
      
      
