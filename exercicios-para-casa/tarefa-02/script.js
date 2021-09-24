/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */
    let a = (prompt('Valor Melancia'));
let b = (prompt('Valor Umbu'));

let descontoMelancia = 2;
let descontoUmbu = 3;
let mod = a % descontoMelancia ;
    alert(`Desconto na Melancia de ${descontoMelancia} % ${a} = ${mod}`);

let mod2 = b % descontoUmbu;
    alert(`Desconto no Umbu de ${descontoUmbu} % ${b} = ${mod2}`);
  let div = a - descontoMelancia;
  alert(`Você economizou a quantia de ${a} - ${descontoMelancia} = ${div}`);

  let div2 = b - descontoUmbu;
  alert(`Você economizou a quantia de ${b} - ${descontoUmbu} = ${div2}`); 

   alert(`Obrigada e volte sempre!`);