import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMoneyCheckAlt,
  FaWallet,
  FaCalculator,
  FaClipboardList,
} from "react-icons/fa";
import "./Sidebar.css";
import Logo from "../assets/images/logo2.jpg";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { name: "Main Page", icon: <FaHome />, link: "/main-page" },
    { name: "Income Tracker", icon: <FaMoneyCheckAlt />, link: "/incometracker" },
    { name: "Expense Tracker", icon: <FaWallet />, link: "/expensetracker" },
    { name: "Tax Calculator", icon: <FaCalculator />, link: "/taxcalculator" },
    { name: "Budget Planner", icon: <FaClipboardList />, link: "/budgetplanner" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebarHeader">
        <div className="logoWrapper">
          <img src={Logo} alt="Logo" className="logoImage" />
          <br />
          <span className="logoText">Finance Manager</span>
        </div>
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menuItem">
            <NavLink
              to={item.link}
              className="menuItemContent"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
