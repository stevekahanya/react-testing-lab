import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../components/App";

test("filters transactions by search term and sorts by category", async () => {
  const mockData = [
    { id: 1, date: "2024-01-01", description: "Apple", category: "Z-Food", amount: 5 },
    { id: 2, date: "2024-01-01", description: "Banana", category: "A-Fruit", amount: 10 },
  ];
  global.setFetchResponse(mockData);

  render(<App />);

  // Wait for initial load
  await screen.findByText("Apple");

  // Test Search functionality
  const searchInput = screen.getByPlaceholderText("Search your Recent Transactions");
  fireEvent.change(searchInput, { target: { value: "Apple" } });
  
  expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  expect(screen.getByText("Apple")).toBeInTheDocument();

  // Test Sorting functionality
  fireEvent.change(searchInput, { target: { value: "" } });
  const sortSelect = screen.getByRole("combobox");
  fireEvent.change(sortSelect, { target: { value: "category" } });

  const rows = screen.getAllByRole("row");
  // Banana (A-Fruit) should now appear before Apple (Z-Food)
  expect(rows[1]).toHaveTextContent("Banana");
  expect(rows[2]).toHaveTextContent("Apple");
});