import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/Home';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import TaxCalculator from './Components/TaxCalculator';
import BudgetPlanner from './Components/BudgetPlanner';
import IncomeTracker from './Components/IncomeTracker';
import MainPage from './Components/MainPage';
import ExpenseTracker from './Components/ExpenseTracker';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div className="appContainer">
                <Sidebar isOpen={isSidebarOpen} />
                <div className="mainContent">
                  <Header toggleSidebar={toggleSidebar} />
                  <Routes>
                    <Route path="/main-page" element={<MainPage />} />
                    <Route path="/expensetracker" element={<ExpenseTracker />} />
                    <Route path="/incometracker" element={<IncomeTracker />} />
                    <Route path="/budgetplanner" element={<BudgetPlanner />} />
                    <Route path="/taxcalculator" element={<TaxCalculator />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
