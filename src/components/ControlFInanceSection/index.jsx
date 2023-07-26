import { FinanceForm } from "../FinanceForm";
import { ControlFinanceList } from "./ControlFInanceList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ControlFinanceSection = () => {
  const [financeList, setFinanceList] = useState([]);

  const addFinanceControlCard = (formData) => {
    const newFinanceControl = { ...formData, id: uuidv4() };
    console.log(newFinanceControl);
    setFinanceList([...financeList, newFinanceControl]);
  };
  return (
    <section>
      <FinanceForm addFinanceControlCard={addFinanceControlCard} />
      <ControlFinanceList financeList={financeList} />
    </section>
  );
};
