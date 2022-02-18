import React from "react";
import ExpenseItem from "./ExpenseItem";
export default function Expenses(props) {
  return (
    <div>
      <ExpenseItem name={props.items[0].name} date={props.items[0].date} />
      <ExpenseItem name={props.items[1].name} date={props.items[1].date} />
    </div>
  );
}
