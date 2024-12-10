import React from "react";
import { Bar } from "react-chartjs-2"; // For the chart
import { Chart as ChartJS } from "chart.js/auto";
import "./MainPage.css";

const MainPage = () => {
  // Financial Data for charts
  const financialHistoryData = {
    labels: ["January", "February", "March", "April", "May"], // Add more months if needed
    datasets: [
      {
        label: "Expenses",
        data: [-50, -100, -80, -120, -60], // Example expense data
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Income",
        data: [100, 150, 120, 90, 130], // Example income data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Total Income, Expenses, and Savings Data
  const totalIncomeBeforeTax = 100;
  const totalIncomeAfterTax = -53;
  const totalExpense = -50;
  const totalSavings = 0;
  const moneyOnCard = 0;
  const moneyInCash = -50;
  const amountToPay = 153;

  return (
    <div className="mainPage">
      {/* Financial Summary Section */}
      <div className="financialSummary">
        <div className="summaryItem">
          <h3>Money in Cash</h3>
          <p>{moneyInCash} $</p>
        </div>
        <div className="summaryItem">
          <h3>Money on Card</h3>
          <p>{moneyOnCard} $</p>
        </div>
        <div className="summaryItem">
          <h3>Your Total Savings</h3>
          <p>{totalSavings} $</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="chartsSection">
        <div className="chartContainer">
          <h3>Financial History</h3>
          <Bar data={financialHistoryData} />
        </div>

        <div className="chartContainer">
          <h3>Total Expenses</h3>
          <Bar
            data={{
              labels: ["January", "February", "March", "April", "May"],
              datasets: [
                {
                  label: "Total Expense",
                  data: [totalExpense, totalExpense, totalExpense, totalExpense, totalExpense], // Add appropriate expense data here
                  backgroundColor: "rgba(255, 99, 132, 0.6)",
                },
              ],
            }}
          />
        </div>
      </div>

      {/* Income and Tax Info */}
      <div className="incomeInfo">
        <div className="infoItem">
          <h3>Total Income Before Tax</h3>
          <p>{totalIncomeBeforeTax} $</p>
        </div>
        <div className="infoItem">
          <h3>You Need to Pay</h3>
          <p>{amountToPay} $</p>
        </div>
        <div className="infoItem">
          <h3>Total Income After Tax</h3>
          <p>{totalIncomeAfterTax} $</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
