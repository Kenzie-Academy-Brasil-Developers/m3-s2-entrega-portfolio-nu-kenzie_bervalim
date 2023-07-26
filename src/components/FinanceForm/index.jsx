import { useState } from "react";
import { InputDescription } from "../InputDescription";
import { InputValue } from "../InputValue";
import { SelectTypeFinance } from "../SelectTypeFinance";

export const FinanceForm = () => {
  const [financialDescription, setFinancialDescription] = useState("");
  const [financialValue, setFinancialValue] = useState("");
  const [typeValue, setTypeValue] = useState("Entrada");

  const submitFinancialInfo = (event) => {
    event.preventDefault();
    console.log({ financialDescription, financialValue, typeValue });
    setFinancialDescription("");
    setFinancialValue("");
    setTypeValue("Entrada");
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
      <SelectTypeFinance
        label="Tipo de valor"
        id="typeValue"
        value={typeValue}
        setValue={setTypeValue}
      >
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </SelectTypeFinance>
      <button type="submit">Inserir Valor </button>
    </form>
  );
};
