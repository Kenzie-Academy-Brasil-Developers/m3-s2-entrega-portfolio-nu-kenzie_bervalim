import { ControlFinanceCard } from "./ControlFinanceCard";

export const ControlFinanceList = ({
  financeList,
  removeFinanceControlCard,
}) => {
  return (
    <section>
      <h3>Resumo Financeiro</h3>
      {financeList.length > 0 ? (
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
      ) : (
        <h2>Você ainda não possui nenhum lançamento</h2>
      )}
    </section>
  );
};
