import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const ExpenseFormComponent = ({ fetchExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || amount.trim() === "") {
      alert("Please fill out both fields!");
      return;
    }

    try {
      const newExpense = { title, amount: parseFloat(amount) };
      await axios.post("http://localhost:5000/api/expenses", newExpense);
      fetchExpenses(); // Fetch updated expenses after adding
      setTitle("");
      setAmount("");
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseFormComponent;
