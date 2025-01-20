import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseFormComponent from "./ExpenseFormComponent";
import ExpenseListComponent from "./ExpenseListComponent";
import "./styles.css";

const BudgetTrackerComponent = () => {
  const [expenses, setExpenses] = useState([]); // State for expenses

  // Fetch all expenses from the backend
  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(response.data); // Update state with fetched expenses
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  // Delete an expense by ID
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      // Update the local state after deletion
      setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp._id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  // Calculate the total balance
  const totalBalance = expenses.reduce((total, item) => total + parseFloat(item.amount), 0);

  // Fetch expenses when the component mounts
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="tracker-container">
      <div className="balance-container">
        <h2>Total Balance: ₹{totalBalance.toFixed(2)}</h2>
      </div>
      <ExpenseFormComponent fetchExpenses={fetchExpenses} /> {/* Add new expenses */}
      <ExpenseListComponent expenses={expenses} deleteExpense={deleteExpense} /> {/* Render expenses */}
    </div>
  );
};

export default BudgetTrackerComponent;
