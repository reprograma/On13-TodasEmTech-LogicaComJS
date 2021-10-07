/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let price = Number(prompt('insira o valor do produto'));
    let percent = Number(prompt('insira o percentual de desconto'));

    let finalPrice = (price - (price / 100 * percent));
    let offPrice = (price - finalPrice)

    alert(`o preço final é R$ ${finalPrice}`);
    alert(`você economizou R$ ${offPrice}`);