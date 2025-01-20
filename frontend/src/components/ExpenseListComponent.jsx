import React from "react";
import "./styles.css";

const ExpenseListComponent = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list">
      <h3>Expenses:</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet!</p>
      ) : (
        expenses.map((expense) => (
          <div className="expense-item" key={expense._id}>
            <span>{expense.title}</span>
            <span className="expense-price">₹{expense.amount.toFixed(2)}</span>
            <button onClick={() => deleteExpense(expense._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseListComponent;
