/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    //1. Solicite o preço de uma mercadoria;
    let Mercadoria = prompt("Insira a mercadoria desejada");

    switch (Mercadoria) {
        case 'feijão':
          alert("R$ 8,00 reais");
          break;
        case 'arroz':
          alert("R$ 5,00 reais");
          break;
        case 'macarrão':
          alert("R$ 4,49 reais");
          break;
        default:
          alert("Mercadoria inválida, tente novamente");
      }

      // 2. Solicite um percentual de desconto;
      const ValorMercadoria1 = parseFloat(prompt(`Valor da mercadoria`));
      const ValorMercadoria = (ValorMercadoria1) / 100;

      //3. Informe ao usuário o valor da mercadoria após o desconto;
      const PercentualMercadoria = (ValorMercadoria1) - (ValorMercadoria);
      alert(PercentualMercadoria);

      //4. Informe ao usuário qual quantia foi economizada por conta do desconto.
      const ValorEconomizado = (ValorMercadoria1) - (PercentualMercadoria);
      alert (`${ValorEconomizado} valor economizado`);
