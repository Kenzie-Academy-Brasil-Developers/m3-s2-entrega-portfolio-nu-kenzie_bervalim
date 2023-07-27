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
        <h3 className="title two">{financialDescription}</h3>
        <span className="paragraph brighter">{typeValue}</span>
      </div>
      <div>
        <span className="paragraph darker">
          {Number(financialValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          className="btn deleteCard"
          onClick={() => removeFinanceControlCard(id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
};
