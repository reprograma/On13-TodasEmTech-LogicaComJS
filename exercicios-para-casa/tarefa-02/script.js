
    //Tarefa 02

//1. Solicite o preço de uma mercadoria;
    let a = (prompt('Valor Abacaxi'));
    let b = (prompt('Valor Maçã'));
     
//2. Solicite um percentual de desconto;
    let descontoAbacaxi = 2;
    let descontoMaca = 4;   
    
        
//3. Informe ao usuário o valor da mercadoria após o desconto;
    let mod = a % descontoAbacaxi ;
    alert(`${a} % ${descontoAbacaxi} = ${mod}`);

    let mod2 = b % descontoMaca;
    alert(`${b} % ${descontoMaca} = ${mod2}`);

//4. Informe ao usuário qual quantia foi economizada por conta do desconto.
  let div = a - descontoAbacaxi;
  alert(`${a} - ${descontoAbacaxi} = ${div}`);

  let div2 = b - descontoMaca;
  alert(`${b} - ${descontoMaca} = ${div2}`);

