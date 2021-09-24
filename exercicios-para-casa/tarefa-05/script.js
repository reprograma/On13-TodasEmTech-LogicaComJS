
    //Tarefa 05

    //1. Solicite a quantidade de itens na compra;
        let itensCompra = prompt('Qual a quantida de itens na compra ');
        let quantidade = 10;
        for (preco = 1 ; preco <= 10; preco ++){
            console.log('preco da mercadoria' + preco);
        }
   // 2. Receba o valor de cada um dos itens da compra;
      
   // 3. Informe o total gasto na compra.
    console.log(itensCompra + quantidade);
    let soma = itensCompra + quantidade;
    alert(`${itensCompra} + ${quantidade} = ${soma}`);