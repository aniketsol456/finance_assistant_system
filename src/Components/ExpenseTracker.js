import React, { useState } from "react";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    type: "",
    date: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExpense = () => {
    if (!formData.amount || !formData.description || !formData.category || !formData.type) return;
    setExpenses([...expenses, formData]);
    setFormData({
      amount: "",
      description: "",
      category: "",
      type: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const calculateTotal = () =>
    expenses.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);

  return (
    <div className="expense-tracker">
      <div className="form-section">
        <h3>Write down your expense</h3>
        <div className="form-group">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
          </select>
          <select name="type" value={formData.type} onChange={handleInputChange}>
            <option value="">Type of Expense</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <button onClick={handleAddExpense}>Add expense</button>
        </div>
      </div>
      <div className="expenses-section">
        <h3>Expenses:</h3>
        <div className="date-filter">
          <div>
            From: <input type="date" />
          </div>
          <div>
            To: <input type="date" />
          </div>
          <div className="total">
            <span>{calculateTotal()} $ Total expense</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Category</th>
              <th>Type</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="amount">- {expense.amount} $</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>{expense.type}</td>
                <td>{expense.date}</td>
                <td>
                  <button onClick={() => handleRemoveExpense(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseTracker;
