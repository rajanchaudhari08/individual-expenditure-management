import { useState } from "react";
// import ExpenditureListing from "../FunctionalDeployment/ExpenditureListing";
import "../FunctionalDeployment/ExpenseListing.css";
import CardContainer from "../UserInterface/CardContainer";
import FilterExpense from "./FilterExpense";
import ExpenseItems from "./ExpenseItems";

const ExpenseListing = (properties) => {
  const [filterbyYear, setFilterbyYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterbyYear(selectedYear);
    // console.log(selectedYear);
  };

  const filterExpenseItem = properties.expenseItem.filter((expense) => {
    return expense.date.getFullYear().toString() === filterbyYear;
  });

  return (
    <li>
      <CardContainer className="expenses">
        <FilterExpense
          selected={filterbyYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItems items={filterExpenseItem} />
        {/* {expenseContent} */}
        {/* {properties.expenseItem.map((expense) => (
        <ExpenditureListing
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))} */}
        {/* For reference: Ternary Conditional Operator */}
        {/* {filterExpenseItem.length === 0 && <p>No Expenses found</p>} */}
        {/* {filterExpenseItem.length > 0 &&
        filterExpenseItem.map((expense) => {
          <ExpenditureListing
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />;
        })} */}
        {/* <ExpenditureListing
        title={properties.expenseItem[0].title}
        price={properties.expenseItem[0].price}
        date={properties.expenseItem[0].date}
      />
      <ExpenditureListing
        title={properties.expenseItem[1].title}
        price={properties.expenseItem[1].price}
        date={properties.expenseItem[1].date}
      />
      <ExpenditureListing
        title={properties.expenseItem[2].title}
        price={properties.expenseItem[2].price}
        date={properties.expenseItem[2].date}
      />
      <ExpenditureListing
        title={properties.expenseItem[3].title}
        price={properties.expenseItem[3].price}
        date={properties.expenseItem[3].date}
      /> */}
      </CardContainer>
    </li>
  );
};
export default ExpenseListing;
