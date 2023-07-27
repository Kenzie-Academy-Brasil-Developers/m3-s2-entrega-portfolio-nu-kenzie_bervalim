import styles from "./style.module.scss";

export const ControlFinanceCard = ({
  financialDescription,
  typeValue,
  financialValue,
  removeFinanceControlCard,
  id,
}) => {
  return (
    <li
      className={`${styles.ControlFinanceCard} ${
        typeValue === "Entrada" ? styles.green : styles.grey
      }`}
    >
      <div>
        <h3 className="title two">{financialDescription}</h3>
        <span className="paragraph brighter">{typeValue}</span>
      </div>
      <div>
        <p className="paragraph darker">
          {Number(financialValue).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
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
