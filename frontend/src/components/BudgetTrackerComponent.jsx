import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseFormComponent from "./ExpenseFormComponent";
import ExpenseListComponent from "./ExpenseListComponent";
import "./styles.css";

const BudgetTrackerComponent = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      fetchExpenses(); // Fetch updated expenses after deletion
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const totalBalance = expenses.reduce((total, item) => total + parseFloat(item.amount), 0);

  return (
    <div className="tracker-container">
      <div className="balance-container">
        <h2>Total Balance: ₹{totalBalance.toFixed(2)}</h2>
      </div>
      <ExpenseFormComponent fetchExpenses={fetchExpenses} />
      <ExpenseListComponent expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default BudgetTrackerComponent;
