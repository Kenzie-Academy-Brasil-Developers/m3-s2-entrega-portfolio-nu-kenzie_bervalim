import { useState } from "react";
import { InputDescription } from "../InputDescription";
import { InputValue } from "../InputValue";

export const FinanceForm = () => {
  const [financialDescription, setFinancialDescription] = useState("");
  const [financialValue, setFinancialValue] = useState("");

  const submitFinancialInfo = (event) => {
    event.preventDefault();
    console.log({ financialDescription, financialValue });
    setFinancialDescription("");
    setFinancialValue("");
  };

  return (
    <form onSubmit={submitFinancialInfo}>
      <InputDescription
        label="Descrição"
        placeholder="Digite aqui  sua descrição"
        type="text"
        id="financiaDescription"
        value={financialDescription}
        setValue={setFinancialDescription}
      />
      <InputValue
        label="Valor (R$)"
        placeholder="1"
        type="number"
        id="financialValue"
        value={financialValue}
        setValue={setFinancialValue}
      />
      <button type="submit">Inserir Valor </button>
    </form>
  );
};
