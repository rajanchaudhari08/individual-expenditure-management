import ExpenseListing from "./components/ExpenseListing";
function App() {
  const expenseList = [
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
      date: new Date(2021, 3, 28),
    },
    {
      id: "expenseID4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseListing expenseItem={expenseList} />
    </div>
  );
}

export default App;
