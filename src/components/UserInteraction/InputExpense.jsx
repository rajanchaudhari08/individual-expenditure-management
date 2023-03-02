import "../UserInteraction/InputExpense.css";
import InputFormExpense from "../UserInteraction/InputFormExpense";

const InputExpense = (properties) => {
  const updateExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...inputExpenseData,
    };
    // console.log(expenseData);
    properties.onSaveExpenseData(expenseData);
  };
  return (
    <div className="input-expense">
      <InputFormExpense onUpdateExpenseData={updateExpenseDataHandler} />
    </div>
  );
};

export default InputExpense;
