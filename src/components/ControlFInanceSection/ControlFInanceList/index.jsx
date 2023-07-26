import { ControlFinanceCard } from "./ControlFinanceCard";

export const ControlFinanceList = ({ financeList }) => {
  return (
    <section>
      <h3>Resumo Financeiro</h3>
      <ul>
        {financeList.map((finance) => (
          <ControlFinanceCard
            key={finance.id}
            financialDescription={finance.financialDescription}
            typeValue={finance.typeValue}
            financialValue={finance.financialValue}
          />
        ))}
      </ul>
    </section>
  );
};
