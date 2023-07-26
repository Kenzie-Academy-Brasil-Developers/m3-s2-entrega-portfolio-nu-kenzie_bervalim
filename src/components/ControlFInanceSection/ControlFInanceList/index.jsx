import { ControlFinanceCard } from "./ControlFinanceCard";

export const ControlFinanceList = () => {
  return (
    <section>
      <h3>Resumo Financeiro</h3>
      <ul>
        <ControlFinanceCard
          financialDescription="Teste"
          typeValue="Entrada"
          financialValue={100}
        />
      </ul>
    </section>
  );
};
