import { FinanceForm } from "../FinanceForm";
import { ControlFinanceList } from "./ControlFInanceList";
import { useState } from "react";

export const ControlFinanceSection = () => {
  const [financeList, setNoteList] = useState([]);

  return (
    <section>
      <FinanceForm />
      <ControlFinanceList />
    </section>
  );
};
