import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../components/App";

test("displays transactions on startup", async () => {
  const mockData = [
    { id: 1, date: "2024-01-01", description: "Test Item", category: "Food", amount: 100 },
  ];
  global.setFetchResponse(mockData); // Use helper from setup.jsx

  render(<App />);

  const items = await screen.findAllByRole("row");
  // Expect header row + 1 data row
  expect(items.length).toBe(2);
  expect(screen.getByText("Test Item")).toBeInTheDocument();
});