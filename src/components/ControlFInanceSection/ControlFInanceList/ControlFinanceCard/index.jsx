export const ControlFinanceCard = ({
  financialDescription,
  typeValue,
  financialValue,
}) => {
  return (
    <li>
      <div>
        <h3>{financialDescription}</h3>
        <span>{typeValue}</span>
      </div>
      <div>
        <span>
          {financialValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button>Excluir</button>
      </div>
    </li>
  );
};
