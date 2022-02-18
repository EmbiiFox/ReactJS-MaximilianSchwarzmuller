import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
export default function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 22);
  // const expenseName = "EMbi";
  return (
    <Card>
      <ExpenseDate date={props.date} />
      <div>Chin chào {props.name}</div>
    </Card>
  );
}
