import ExpenditureListing from "./components/ExpenditureListing";
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
      <ExpenditureListing
        title={expenseList[0].title}
        price={expenseList[0].price}
        date={expenseList[0].date}
      />
      <ExpenditureListing
        title={expenseList[1].title}
        price={expenseList[1].price}
        date={expenseList[1].date}
      />
      <ExpenditureListing
        title={expenseList[2].title}
        price={expenseList[2].price}
        date={expenseList[2].date}
      />
      <ExpenditureListing
        title={expenseList[3].title}
        price={expenseList[3].price}
        date={expenseList[3].date}
      />
    </div>
  );
}

export default App;
