import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
export default function Meals(props) {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
