import ExpenditureListing from "./ExpenditureListing";
import "../FunctionalDeployment/ExpenseItems.css";
const ExpenseItems = (properties) => {
  if (properties.items.length === 0) {
    return <h2 className="expenses-item__fallback">No Expense found</h2>;
  }
  return (
    <ul className="expenses-item">
      {properties.items.map((expense) => (
        <ExpenditureListing
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseItems;
