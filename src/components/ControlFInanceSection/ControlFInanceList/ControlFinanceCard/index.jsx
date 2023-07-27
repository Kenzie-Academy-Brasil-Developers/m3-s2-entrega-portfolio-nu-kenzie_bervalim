export const ControlFinanceCard = ({
  financialDescription,
  typeValue,
  financialValue,
  removeFinanceControlCard,
  id,
}) => {
  return (
    <li className={typeValue === "Entrada" ? "green" : "grey"}>
      <div>
        <h3>{financialDescription}</h3>
        <span>{typeValue}</span>
      </div>
      <div>
        <span>
          {Number(financialValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => removeFinanceControlCard(id)}>Excluir</button>
      </div>
    </li>
  );
};
