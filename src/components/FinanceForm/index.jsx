import { useState } from "react";
import { InputDescription } from "../InputDescription";
import { InputValue } from "../InputValue";
import { SelectTypeFinance } from "../SelectTypeFinance";
import { SumControlFinance } from "../SumControlFinance";

export const FinanceForm = ({ addFinanceControlCard, financeList }) => {
  const [financialDescription, setFinancialDescription] = useState("");
  const [financialValue, setFinancialValue] = useState("");
  const [typeValue, setTypeValue] = useState("Entrada");

  const submitFinancialInfo = (event) => {
    event.preventDefault();
    addFinanceControlCard({ financialDescription, financialValue, typeValue });
    setFinancialDescription("");
    setFinancialValue("");
    setTypeValue("Entrada");
  };

  return (
    <>
      <form onSubmit={submitFinancialInfo}>
        <InputDescription
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          type="text"
          id="financiaDescription"
          value={financialDescription}
          setValue={setFinancialDescription}
          required={true}
        />
        <span className="formTypograpy one grey">Ex: Compra de roupas</span>
        <InputValue
          label="Valor (R$)"
          placeholder="1"
          type="number"
          id="financialValue"
          value={financialValue}
          setValue={setFinancialValue}
          required={true}
        />
        <SelectTypeFinance
          label="Tipo de valor"
          id="typeValue"
          value={typeValue}
          setValue={setTypeValue}
          required={true}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </SelectTypeFinance>
        <button className="btn sendValue fullwidth" type="submit">
          Inserir Valor
        </button>
      </form>
      <SumControlFinance financeList={financeList} />
    </>
  );
};
