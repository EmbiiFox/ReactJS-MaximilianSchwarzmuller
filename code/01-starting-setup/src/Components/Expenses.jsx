import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.jsx", selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
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
      </Card>
    </div>
  );
}
