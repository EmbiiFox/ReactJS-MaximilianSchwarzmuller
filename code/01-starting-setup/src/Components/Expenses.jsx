import React from "react";
import ExpenseItem from "./ExpenseItem";
export default function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        name={props.items[0].name}
        date={props.items[0].date}
        title={props.items[0].title}
      />
      <ExpenseItem
        name={props.items[1].name}
        date={props.items[1].date}
        title={props.items[1].title}
      />
    </div>
  );
}
