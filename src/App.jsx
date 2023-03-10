import ExpenseListing from "./components/FunctionalDeployment/ExpenseListing";
import InputExpense from "./components/UserInteraction/InputExpense";
import { useState } from "react";

const App = () => {
  const initial__expenseList = [
    {
      id: "expenseID1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "expenseID2",
      title: "New TV",
      price: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "expenseID3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2022, 3, 28),
    },
    {
      id: "expenseID4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(initial__expenseList);

  const saveExpenseDataHandler = (expense) => {
    // console.log("Inclusion in App.jsx");
    // console.log(expenseObjectValue);
    setExpenseList((previousExpense) => {
      return [expense, ...previousExpense];
    });
  };

  return (
    <div>
      <InputExpense onSaveExpenseData={saveExpenseDataHandler} />
      <ExpenseListing expenseItem={expenseList} />
    </div>
  );
  /* For reference
  return (
    "div", React.createElement(ExpenseListing, { expenseItem: expenseList })
  );
  */
};

export default App;
