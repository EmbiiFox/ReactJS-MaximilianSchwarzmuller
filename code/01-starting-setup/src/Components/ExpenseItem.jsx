import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
export default function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 22);
  // const expenseName = "EMbi";

  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  console.log(props.title);

  const clickHandler = () => {
    // title = "Update!";
    setTitle("Update!!!!");
    console.log(title);
  };
  return (
    <Card>
      <ExpenseDate date={props.date} />
      <div>Chin chào {props.name}</div>
      <h2>{title}</h2>
      <button onClick={clickHandler}>CHANGE NAME!</button>
    </Card>
  );
}
