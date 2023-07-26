import { FinanceForm } from "../FinanceForm";
import { ControlFinanceList } from "./ControlFInanceList";
import { useState } from "react";

export const ControlFinanceSection = () => {
  const [financeList, setFinanceList] = useState([]);

  const addFinanceControlCard = (formData) => {
    setFinanceList([...financeList, formData]);
  };
  return (
    <section>
      <FinanceForm addFinanceControlCard={addFinanceControlCard} />
      <ControlFinanceList financeList={financeList} />
    </section>
  );
};
