import React from "react";
import "./styles.css";
import logo from "./assets/logo.webp"; // Adjust file extension as needed (e.g., logo.png or logo.svg)

const HeaderComponent = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Simple Budget Tracker</h1>
    </header>
  );
};

export default HeaderComponent;
