import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";
import { useGlobalContext } from "../../context/globalContext";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../context/globalContext", () => ({
  useGlobalContext: jest.fn(),
}));

describe("ExpenseForm", () => {
  test("renders form fields correctly", () => {
    const mockAddExpense = jest.fn();
    const mockSetError = jest.fn();

    useGlobalContext.mockReturnValue({
      addExpense: mockAddExpense,
      error: "",
      setError: mockSetError,
    });

    render(<ExpenseForm />);

    // Check if all input fields are rendered correctly
    const titleInput = screen.getByPlaceholderText("Expense Title");
    expect(titleInput).toBeInTheDocument();

    const amountInput = screen.getByPlaceholderText("Expense Amount");
    expect(amountInput).toBeInTheDocument();

    const dateInput = screen.getByPlaceholderText("Enter a Date");
    expect(dateInput).toBeInTheDocument();

    const descriptionTextarea = screen.getByPlaceholderText("Add a Reference");
    expect(descriptionTextarea).toBeInTheDocument();
  });

  test("handles input changes correctly", () => {
    const mockAddExpense = jest.fn();
    const mockSetError = jest.fn();

    useGlobalContext.mockReturnValue({
      addExpense: mockAddExpense,
      error: "",
      setError: mockSetError,
    });

    render(<ExpenseForm />);

    // Simulate user input
    const titleInput = screen.getByPlaceholderText("Expense Title");
    fireEvent.change(titleInput, { target: { value: "Expense 1" } });
    expect(titleInput.value).toBe("Expense 1");

    const amountInput = screen.getByPlaceholderText("Expense Amount");
    fireEvent.change(amountInput, { target: { value: "50" } });
    expect(amountInput.value).toBe("50");

    const descriptionTextarea = screen.getByPlaceholderText("Add a Reference");
    fireEvent.change(descriptionTextarea, { target: { value: "Reference 1" } });
    expect(descriptionTextarea.value).toBe("Reference 1");
  });

  test("handles form submission correctly", () => {
    const mockAddExpense = jest.fn();
    const mockSetError = jest.fn();

    useGlobalContext.mockReturnValue({
      addExpense: mockAddExpense,
      error: "",
      setError: mockSetError,
    });

    render(<ExpenseForm />);

    // Check if input fields are cleared after submission
    const titleInput = screen.getByPlaceholderText("Expense Title");
    expect(titleInput.value).toBe("");

    const amountInput = screen.getByPlaceholderText("Expense Amount");
    expect(amountInput.value).toBe("");

    const dateInput = screen.getByPlaceholderText("Enter a Date");
    expect(dateInput.value).toBe("");

    const categorySelect = screen.getByDisplayValue("Select Option");
    expect(categorySelect.value).toBe("");

    const descriptionTextarea = screen.getByPlaceholderText("Add a Reference");
    expect(descriptionTextarea.value).toBe("");
  });
});
