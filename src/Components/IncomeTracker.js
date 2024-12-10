import React, { useState } from 'react';
import './IncomeTracker.css';

const IncomeTracker = () => {
  // State to hold the income data
  const [incomeData, setIncomeData] = useState([]);
  const [amount, setAmount] = useState('');
  const [incomeType, setIncomeType] = useState('');
  const [incomeDate, setIncomeDate] = useState('');
  const [taxStatus, setTaxStatus] = useState('');
  
  // Handle form submission to add income
  const handleAddIncome = () => {
    if (amount && incomeType && incomeDate && taxStatus) {
      const newIncome = {
        amount: parseFloat(amount),
        type: incomeType,
        date: incomeDate,
        taxStatus: taxStatus,
      };
      setIncomeData([...incomeData, newIncome]);
      // Reset the form
      setAmount('');
      setIncomeType('');
      setIncomeDate('');
      setTaxStatus('');
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Handle deleting all income records
  const handleDeleteAll = () => {
    setIncomeData([]);
  };

  // Calculate total income
  const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);

  return (
    <div className="incomeTracker">
      {/* Income Input Section */}
      <div className="incomeInputSection">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="inputField"
        />
        <select
          value={incomeType}
          onChange={(e) => setIncomeType(e.target.value)}
          className="inputField"
        >
          <option value="">Select Income Type</option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>
        <input
          type="date"
          value={incomeDate}
          onChange={(e) => setIncomeDate(e.target.value)}
          className="inputField"
        />
        <select
          value={taxStatus}
          onChange={(e) => setTaxStatus(e.target.value)}
          className="inputField"
        >
          <option value="">Taxable or After Tax</option>
          <option value="taxable">Taxable</option>
          <option value="afterTax">After Tax</option>
        </select>
        <button onClick={handleAddIncome} className="addIncomeButton">Add Income</button>
      </div>

      {/* Income Display Section */}
      <div className="incomeDisplaySection">
        <h3>Your Total Income: INR {totalIncome.toFixed(2)}</h3>
        {incomeData.length > 0 && (
          <div>
            <table className="incomeTable">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Tax Status</th>
                </tr>
              </thead>
              <tbody>
                {incomeData.map((income, index) => (
                  <tr key={index}>
                    <td>INR {income.amount.toFixed(2)}</td>
                    <td>{income.type}</td>
                    <td>{income.date}</td>
                    <td>{income.taxStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {incomeData.length > 0 && (
          <button onClick={handleDeleteAll} className="deleteAllButton">Delete All</button>
        )}
      </div>
    </div>
  );
};

export default IncomeTracker;
