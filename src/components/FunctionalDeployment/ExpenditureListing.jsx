import "../FunctionalDeployment/ExpenditureListing.css";
import ExpenditureDate from "../FunctionalDeployment/ExpenditureDate";
import CardContainer from "../UserInterface/CardContainer";
// import { useState } from "react";
const ExpenditureListing = (properties) => {
  // const expenseDate = new Date(2023, 3, 1);
  // const expenseTitle = "Car Insurance";
  // const expensePrice = "$294.67";

  // console.log("Nodes are evaluated by React")

  let title = properties.title;

  // const [title, setTitle] = useState(properties.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <CardContainer className="expense-item">
      {/* <div>{expenseDate.toISOString()}</div> */}
      {/* <div>{properties.date.toISOString()}</div> */}
      {/* <div>{properties.date.toLocaleString("en-US", { month: "long" })}</div> */}
      <ExpenditureDate date={properties.date} />
      <div className="expense-item__description">
        {/* <h2>{expenseTitle}</h2> */}
        <h2>{title}</h2>
        {/* <div className="expense-item__price">{expensePrice}</div> */}
        <div className="expense-item__price">{properties.price}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </CardContainer>
  );
};
export default ExpenditureListing;
