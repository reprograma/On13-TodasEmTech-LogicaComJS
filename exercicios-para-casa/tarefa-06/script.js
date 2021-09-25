/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
    let soma=0;
    let diff=0;
    let valorPago= parseFloat(prompt(`insira o valor pago pelo cliente:`));
    let valorTotal= parseFloat(prompt(`insira o valor total da conta do cliente:`));
    

    if(valorPago<valorTotal){
        soma=valorPago-valorTotal;
        alert(`está faltando ${-soma} reais.`);

    }if(valorPago===valorTotal){
        alert(`conta paga. até logo, agradecemos a preferencia.`);

    }if(valorPago>valorTotal){
        soma=valorTotal-valorPago;
        alert(`o troco é ${-soma}`);
    }



