import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./MainPage.css";

const MainPage = () => {
  const financialHistoryData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Expenses",
        data: [-50, -100, -80, -120, -60],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Income",
        data: [100, 150, 120, 90, 130],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const totalIncomeBeforeTax = 100;
  const totalIncomeAfterTax = -53;
  const totalExpense = -50;
  const totalSavings = 0;
  const moneyOnCard = 0;
  const moneyInCash = -50;
  const amountToPay = 153;

  return (
    <div className="mainPage">
      <div className="financialSummary">
        <div className="summaryItem">
          <h3>Money in Cash</h3>
          <p>{moneyInCash} INR</p>
        </div>
        <div className="summaryItem">
          <h3>Money on Card</h3>
          <p>{moneyOnCard} INR</p>
        </div>
        <div className="summaryItem">
          <h3>Your Total Savings</h3>
          <p>{totalSavings} INR</p>
        </div>
      </div>

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
                  data: [totalExpense, totalExpense, totalExpense, totalExpense, totalExpense],
                  backgroundColor: "rgba(255, 99, 132, 0.6)",
                },
              ],
            }}
          />
        </div>
      </div>

      <div className="incomeInfo">
        <div className="infoItem">
          <h3>Total Income Before Tax</h3>
          <p>{totalIncomeBeforeTax} INR</p>
        </div>
        <div className="infoItem">
          <h3>You Need to Pay</h3>
          <p>{amountToPay} INR</p>
        </div>
        <div className="infoItem">
          <h3>Total Income After Tax</h3>
          <p>{totalIncomeAfterTax} INR</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
