// import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
function App() {
  const expenses=[
    {name:'Em be',date: new Date(2022, 2, 22), title:"Queen"},
    {name:' Nairubi',date: new Date(2022, 2, 21), title:"Angel"}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem name={expenses[0].name} date={expenses[0].date}/>
      <ExpenseItem name={expenses[1].name} date={expenses[0].date}/> */}
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
