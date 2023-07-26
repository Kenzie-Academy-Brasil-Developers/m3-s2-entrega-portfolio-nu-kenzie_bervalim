import { FinanceForm } from "../FinanceForm";
import { ControlFinanceList } from "./ControlFInanceList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ControlFinanceSection = () => {
  const [financeList, setFinanceList] = useState([]);

  const addFinanceControlCard = (formData) => {
    const newFinanceControl = { ...formData, id: uuidv4() };
    setFinanceList([...financeList, newFinanceControl]);
    console.log(newFinanceControl);
  };

  const removeFinanceControlCard = (removeId) => {
    const filteredFinanceList = financeList.filter(
      (finance) => finance.id !== removeId
    );
    setFinanceList(filteredFinanceList);
    console.log(filteredFinanceList);
  };

  return (
    <section>
      <FinanceForm addFinanceControlCard={addFinanceControlCard} />
      <ControlFinanceList
        financeList={financeList}
        removeFinanceControlCard={removeFinanceControlCard}
      />
    </section>
  );
};
