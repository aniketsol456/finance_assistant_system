import React, { useState } from "react";
import "./TaxCalculator.css";

const TaxCalculator = () => {
  const [filingStatus, setFilingStatus] = useState("single");
  const [useStandardDeduction, setUseStandardDeduction] = useState(false);
  const [deduction, setDeduction] = useState(0);
  const [income, setIncome] = useState(100);
  const [taxableIncome, setTaxableIncome] = useState(100);
  const [stateTax, setStateTax] = useState(0);
  const [federalTax, setFederalTax] = useState(0);
  const [ficaTax, setFicaTax] = useState(7.65);
  const [totalTax, setTotalTax] = useState(0);

  const handleCalculate = () => {
    let adjustedIncome = income;

    if (useStandardDeduction) {
      const standardDeduction =
        filingStatus === "single" ? 13850 : 27700;
      adjustedIncome -= standardDeduction;
    } else {
      adjustedIncome -= deduction;
    }

    const federalTaxRate = 0.12;
    let federalTax = adjustedIncome * federalTaxRate;

    const stateTaxRate = 0.05;
    let stateTax = adjustedIncome * stateTaxRate;

    let ficaTax = adjustedIncome * 0.0765;

    let totalTaxAmount = federalTax + stateTax + ficaTax;

    setStateTax(stateTax);
    setFederalTax(federalTax);
    setFicaTax(ficaTax);
    setTotalTax(totalTaxAmount);
    setTaxableIncome(adjustedIncome);
  };

  return (
    <div className="taxCalculator">
      <div className="taxInputSection">
        <div className="inputRow">
          <label>Filing Status:</label>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        <div className="inputRow">
          <label>Use Standard Deduction:</label>
          <label>
            <input
              type="radio"
              value="yes"
              checked={useStandardDeduction}
              onChange={() => setUseStandardDeduction(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={!useStandardDeduction}
              onChange={() => setUseStandardDeduction(false)}
            />
            No
          </label>
        </div>

        <div className="inputRow">
          <label>Set Your Deduction:</label>
          <input
            type="number"
            value={deduction}
            onChange={(e) => setDeduction(Number(e.target.value))}
            disabled={useStandardDeduction}
          />
        </div>

        <div className="inputRow">
          <label>Your Income Before Taxes:</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
        </div>

        <div className="calculateButton">
          <button onClick={handleCalculate}>Calculate</button>
        </div>

        <div className="note">
          <p>
            Note: Here you can calculate the approximate amount of money that you
            need to pay. It takes the income that you marked Taxable and calculates the percentage
            that you need to pay based on your filing status, amount of deductions,
            amount of income, federal tax rates, and 2024 VA State tax rates.
          </p>
        </div>
      </div>

      <div className="taxResultsSection">
        <div className="resultRow">
          <p>State tax: {stateTax.toFixed(2)}%</p>
        </div>
        <div className="resultRow">
          <p>Federal tax: {federalTax.toFixed(2)}%</p>
        </div>
        <div className="resultRow">
          <p>FICA tax: {ficaTax.toFixed(2)}%</p>
        </div>
        <div className="resultRow">
          <p>Your income before taxes: {income} $</p>
        </div>
        <div className="resultRow">
          <p>You need to pay: {totalTax.toFixed(2)} $</p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
