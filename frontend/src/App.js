import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import BudgetTrackerComponent from "./components/BudgetTrackerComponent";
import "./components/styles.css";

const App = () => {
  return (
    <div className="app-container">
      <HeaderComponent />
      <BudgetTrackerComponent />
    </div>
  );
};

export default App;
