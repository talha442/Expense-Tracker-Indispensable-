import React from "react";
import { render, screen } from "@testing-library/react";
import IncomeItem from "./IncomeItem";

describe("IncomeItem", () => {
  const mockDeleteItem = jest.fn();
  const mockTitle = "Income Item";
  const mockAmount = 100;
  const mockDate = new Date().toISOString();
  const mockCategory = "salary";
  const mockDescription = "Income Description";
  const mockIndicatorColor = "#ff0000";
  const mockType = "income";

  test("renders income item correctly", () => {
    render(
      <IncomeItem
        id={1}
        title={mockTitle}
        amount={mockAmount}
        date={mockDate}
        category={mockCategory}
        description={mockDescription}
        deleteItem={mockDeleteItem}
        indicatorColor={mockIndicatorColor}
        type={mockType}
      />
    );
  });

  test("calls deleteItem function on button click", () => {
    render(
      <IncomeItem
        id={1}
        title={mockTitle}
        amount={mockAmount}
        date={mockDate}
        category={mockCategory}
        description={mockDescription}
        deleteItem={mockDeleteItem}
        indicatorColor={mockIndicatorColor}
        type={mockType}
      />
    );
  });
});
