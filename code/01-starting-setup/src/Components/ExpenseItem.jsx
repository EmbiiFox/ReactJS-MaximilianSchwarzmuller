import React from "react";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 22);
  // const expenseName = "EMbi";
  return (
    <div>
      <ExpenseDate date={props.date} />
      {/* <div>{props.date.toLocaleString("en-US", { moth: "long" })}</div> */}
      <div>Chin chào {props.name}</div>
    </div>
  );
}
