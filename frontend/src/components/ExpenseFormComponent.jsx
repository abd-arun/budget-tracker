import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const ExpenseFormComponent = ({ fetchExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses", { title, amount });
      setTitle(""); // Clear the form
      setAmount("");
      fetchExpenses(); // Fetch updated expenses
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleAddExpense}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseFormComponent;
