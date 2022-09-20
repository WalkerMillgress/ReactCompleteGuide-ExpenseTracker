import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [newExpense, setNewExpense] = useState(false);
  
  const expenseWindowHandler = () => {
    setNewExpense(!newExpense);
  }

  if (newExpense === false) {
    return (
      <div className="new-expense">
        <button onClick={expenseWindowHandler}>Add New Expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} window={expenseWindowHandler} />
    </div>
  );
};

export default NewExpense;
