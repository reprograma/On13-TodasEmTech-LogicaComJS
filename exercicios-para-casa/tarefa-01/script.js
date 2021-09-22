// Tarefa 01

//1. Crie duas variáveis para armazenar o nome de usuário e a senha dentro do script;
 let nomeUsuario = "Isabella";
 
 let senhaUsuario = "3";
 
// 2. Use um `prompt` para pedir ao usuário seu nome e armazene o resultado numa variável;
   let usuario = prompt("Digite seu nome");
   console.log(usuario);             

//3. Use outro `prompt` para pedir ao usuário sua senha e a armazene em outra variável;
    let senha = prompt('digite sua senha');
    console.log(senha);

    //4. Verifique se o nome de usuário e a senha estão corretos:
     
     // a. caso afirmativo, cumprimente o usuário com um `Bom dia!` por meio de um `alert`;
          if (nomeUsuario == 'Isabella'){
          if(senhaUsuario == '3')
          alert('Bom dia!');
          }

          /*tambem podemos fazer assim:
          let sol = true;
          if (sol){
               alert('Vou a praia!');
          }*/
     // b. caso as credenciais estejam erradas, informe o usuário
     //(aqui não precisamos pedir as credenciais novamente; podemos finalizar normalmente)
     /*if (sol){
          alert('Praia!');
          } else{
               alert('cinema!');
          }*/


     