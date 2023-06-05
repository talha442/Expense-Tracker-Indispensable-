import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext.js";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

function Income() {
  // Destructuring from Global Context
  const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();

  // To Render Incomes
  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;

    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .form-container {
      width: 100%;

      @media (min-width: 768px) {
        width: 40%;
      }
    }

    .incomes {
      width: 100%;

      @media (min-width: 768px) {
        width: 60%;
      }

      .income-item {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Income;
