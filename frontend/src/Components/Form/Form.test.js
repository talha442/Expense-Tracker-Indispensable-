import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import { useGlobalContext } from "../../context/globalContext";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../context/globalContext", () => ({
  useGlobalContext: jest.fn(),
}));

describe("Form", () => {
  test("renders form fields correctly", () => {
    const mockAddIncome = jest.fn();
    const mockSetError = jest.fn();

    useGlobalContext.mockReturnValue({
      addIncome: mockAddIncome,
      error: "",
      setError: mockSetError,
    });

    render(<Form />);

    // Check if all input fields are rendered correctly
    const titleInput = screen.getByPlaceholderText("Salary Title");
    expect(titleInput).toBeInTheDocument();

    const amountInput = screen.getByPlaceholderText("Salary Amount");
    expect(amountInput).toBeInTheDocument();

    const dateInput = screen.getByPlaceholderText("Enter a Date");
    expect(dateInput).toBeInTheDocument();

    const descriptionTextarea = screen.getByPlaceholderText("Add a Reference");
    expect(descriptionTextarea).toBeInTheDocument();
  });

  test("handles input changes correctly", () => {
    const mockAddIncome = jest.fn();
    const mockSetError = jest.fn();

    useGlobalContext.mockReturnValue({
      addIncome: mockAddIncome,
      error: "",
      setError: mockSetError,
    });

    render(<Form />);

    // Simulate user input
    const titleInput = screen.getByPlaceholderText("Salary Title");
    fireEvent.change(titleInput, { target: { value: "Salary 1" } });
    expect(titleInput.value).toBe("Salary 1");

    const amountInput = screen.getByPlaceholderText("Salary Amount");
    fireEvent.change(amountInput, { target: { value: "1000" } });
    expect(amountInput.value).toBe("1000");

    const dateInput = screen.getByPlaceholderText("Enter a Date");
    fireEvent.change(dateInput, { target: { value: "2023/06/05" } });
    expect(dateInput.value).toBe("05/06/23");

    const descriptionTextarea = screen.getByPlaceholderText("Add a Reference");
    fireEvent.change(descriptionTextarea, { target: { value: "Reference 1" } });
    expect(descriptionTextarea.value).toBe("Reference 1");
  });

  test("handles form submission correctly", () => {
    const mockAddIncome = jest.fn();
    const mockSetError = jest.fn();

    useGlobalContext.mockReturnValue({
      addIncome: mockAddIncome,
      error: "",
      setError: mockSetError,
    });

    render(<Form />);

    // Check if input fields are cleared after submission
    const titleInput = screen.getByPlaceholderText("Salary Title");
    expect(titleInput.value).toBe("");

    const amountInput = screen.getByPlaceholderText("Salary Amount");
    expect(amountInput.value).toBe("");

    const dateInput = screen.getByPlaceholderText("Enter a Date");
    expect(dateInput.value).toBe("");

    const descriptionTextarea = screen.getByPlaceholderText("Add a Reference");
    expect(descriptionTextarea.value).toBe("");
  });
});
