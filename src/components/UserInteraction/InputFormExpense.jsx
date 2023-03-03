import "../UserInteraction/InputFormExpense.css";
import { useState } from "react";

const InputFormExpense = (properties) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");

  /* For reference */
  /* 
  const [userInput, setUserInput] = useState({
    inputText: "",
    inputNumber: null,
    inputDate: "",
  });
  */

  const titleChangeHandler = (event) => {
    setInputText(event.target.value);
    // console.log("Title changed");

    /* For reference */
    /* 
    setUserInput({
      inputText: event.target.value,
      ...userInput,
    });
    */
    /*
    setUserInput((previousState) => {
      return {
        ...previousState,
        inputText: event.target.value,
      };
    });
    */
  };

  const numberChangeHandler = (event) => {
    setInputNumber(event.target.value);
    // console.log(event);

    /* For reference */
    /* 
    setUserInput({
      inputNumber: event.target.value,
      ...userInput,
    });
    */
    /*
    setUserInput((previousState) => {
      return {
        ...previousState,
        inputNumber: event.target.value,
      };
    });
    */
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // console.log(event.target.value);
    /* 
    setUserInput({
      inputDate: event.target.value,
      ...userInput,
    });
    */
    /*
    setUserInput((previousState) => {
      return {
        ...previousState,
        inputDate: event.target.value,
      };
    });
    */
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputText,
      price: inputNumber,
      date: new Date(inputDate),
    };

    // console.log(expenseData);
    properties.onUpdateExpenseData(expenseData);
    
    setInputText("");
    setInputNumber("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-expense__controls">
        <div className="input-expense__control">
          <label>Title</label>
          <input type="text" value={inputText} onChange={titleChangeHandler} />
        </div>
        <div className="input-expense__control">
          <label>Price</label>
          <input
            type="number"
            value={inputNumber}
            min="0.01"
            step="0.01"
            onChange={numberChangeHandler}
          />
        </div>
        <div className="input-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="input-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default InputFormExpense;
