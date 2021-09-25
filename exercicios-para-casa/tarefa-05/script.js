/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

const quantidade = Number(prompt("Digite a quantidade de itens"));
for (let i = 1; i <= quantidade; i++) {
  var valor = Number(prompt(`Digite o valor do ${i}. item`));
}
const total = +valor;
alert(`Você gastou: ${total} R$`);
