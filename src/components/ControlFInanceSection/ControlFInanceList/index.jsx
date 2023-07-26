import { ControlFinanceCard } from "./ControlFinanceCard";

export const ControlFinanceList = ({
  financeList,
  removeFinanceControlCard,
}) => {
  return (
    <section>
      <h3>Resumo Financeiro</h3>
      <ul>
        {financeList.map((finance) => (
          <ControlFinanceCard
            key={finance.id}
            id={finance.id}
            financialDescription={finance.financialDescription}
            typeValue={finance.typeValue}
            financialValue={finance.financialValue}
            removeFinanceControlCard={removeFinanceControlCard}
          />
        ))}
      </ul>
    </section>
  );
};
