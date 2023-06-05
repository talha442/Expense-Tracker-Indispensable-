import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="stat">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="stat">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="stat">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <div className="salary-info">
              <div className="stat-title">
                <h2>Salary Range</h2>
                <div className="salary-item">
                  <p>${Math.min(...incomes.map((item) => item.amount))}</p>
                  <p>${Math.max(...incomes.map((item) => item.amount))}</p>
                </div>
              </div>
              <div className="stat-title">
                <h2>Expense Range</h2>
                <div className="salary-item">
                  <p>${Math.min(...expenses.map((item) => item.amount))}</p>
                  <p>${Math.max(...expenses.map((item) => item.amount))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 3rem;
    }

    .chart-con {
      flex: 1;
      height: 320px;

      .amount-con {
        display: grid;
        gap: 2rem;
        margin-top: 2rem;

        @media (min-width: 768px) {
          display: grid;
          grid-template-columns: auto auto auto auto;
        }

        .stat {
          margin: 5px;
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;
          display: grid;
          justify-content: center;
          align-items: center;
          grid-template-columns: max-content;

          h2 {
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 3rem;
            font-weight: 700;
          }
        }
      }
    }

    .history-con {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .salary-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .stat-title {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1rem;

          h2 {
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
          }

          .salary-item {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
              font-weight: 600;
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
`;

export default Dashboard;
