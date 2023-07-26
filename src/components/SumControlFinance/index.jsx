export const SumControlFinance = ({ financeList }) => {
  const sumFinanceList = financeList.reduce((prevValue, currentValue) => {
    if (currentValue.typeValue === "Entrada") {
      return prevValue + Number(currentValue.financialValue);
    } else if (currentValue.typeValue === "Despesa") {
      return prevValue - Number(currentValue.financialValue);
    } else {
      return prevValue;
    }
  }, 0);

  return (
    <section>
      <div>
        <h3>Valor Total:</h3>
        <span>{sumFinanceList}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </section>
  );
};
