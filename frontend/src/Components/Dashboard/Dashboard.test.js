import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { useGlobalContext } from "../../context/globalContext";
import "@testing-library/jest-dom/extend-expect"; // Import the necessary package

jest.mock("../../context/globalContext", () => ({
  __esModule: true,
  useGlobalContext: jest.fn(),
}));

describe("Dashboard", () => {
  beforeEach(() => {
    useGlobalContext.mockReturnValue({
      totalExpenses: jest.fn().mockReturnValue(100),
      incomes: [],
      expenses: [],
      totalIncome: jest.fn().mockReturnValue(500),
      totalBalance: jest.fn().mockReturnValue(400),
      getIncomes: jest.fn(),
      getExpenses: jest.fn(),
      transactionHistory: jest.fn().mockReturnValue([]), // Mock the transactionHistory function to return an empty array
    });
  });

  test("renders all transaction headings", () => {
    render(<Dashboard />);
    expect(screen.getByText("All Transactions")).toBeInTheDocument();
    // Add assertions for other headings
  });

  test("displays the correct salary range and expense range", () => {
    const incomes = [{ amount: 200 }, { amount: 300 }, { amount: 100 }];
    const expenses = [{ amount: 50 }, { amount: 150 }, { amount: 80 }];

    useGlobalContext.mockReturnValue({
      totalExpenses: jest.fn().mockReturnValue(100),
      incomes: incomes,
      expenses: expenses,
      totalIncome: jest.fn().mockReturnValue(500),
      totalBalance: jest.fn().mockReturnValue(400),
      getIncomes: jest.fn(),
      getExpenses: jest.fn(),
      transactionHistory: jest.fn().mockReturnValue([]), // Mock the transactionHistory function to return an empty array
    });

    render(<Dashboard />);
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("$300")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
  });

  // Add more tests as needed
});
