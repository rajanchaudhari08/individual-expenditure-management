import "../FunctionalDeployment/ExpenditureListing.css";
import ExpenditureDate from "../FunctionalDeployment/ExpenditureDate";
function ExpenditureListing(properties) {
  // const expenseDate = new Date(2023, 3, 1);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = "$294.67";
  return (
    <div className="expense-item">
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{properties.date.toISOString()}</div> */}
      {/* <div>{properties.date.toLocaleString("en-US", { month: "long" })}</div> */}
      <ExpenditureDate date={properties.date} />
      <div className="expense-item__description">
        {/* <h2>{expenseTitle}</h2> */}
        <h2>{properties.title}</h2>
        {/* <div className="expense-item__price">{expensePrice}</div> */}
        <div className="expense-item__price">{properties.price}</div>
      </div>
    </div>
  );
}
export default ExpenditureListing;
