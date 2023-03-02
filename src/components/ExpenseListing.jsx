import ExpenditureListing from "./ExpenditureListing";
import "./ExpenseListing.css";
import CardContainer from "./CardContainer";

function ExpenseListing(properties) {
  return (
    <CardContainer className="expenses">
      <ExpenditureListing
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
      />
    </CardContainer>
  );
}
export default ExpenseListing;
