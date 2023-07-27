import { FinanceForm } from "../FinanceForm";
import { ControlFinanceList } from "./ControlFInanceList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ControlFinanceSection = () => {
  const [financeList, setFinanceList] = useState([]);

  const addFinanceControlCard = (formData) => {
    const newFinanceControl = { ...formData, id: uuidv4() };
    setFinanceList([...financeList, newFinanceControl]);
  };

  const removeFinanceControlCard = (removeId) => {
    const filteredFinanceList = financeList.filter(
      (finance) => finance.id !== removeId
    );
    setFinanceList(filteredFinanceList);
  };

  return (
    <section>
      <div className="container">
        <FinanceForm
          financeList={financeList}
          addFinanceControlCard={addFinanceControlCard}
        />
        <ControlFinanceList
          financeList={financeList}
          removeFinanceControlCard={removeFinanceControlCard}
        />
      </div>
    </section>
  );
};
