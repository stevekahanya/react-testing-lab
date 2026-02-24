import { render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../../components/App";

test("displays transactions on startup", async () => {
  const mockData = [
    { id: 1, date: "2024-01-01", description: "Test Item", category: "Food", amount: 100 },
  ];
  global.setFetchResponse(mockData);

  render(<App />);

  // Explicitly wait for the data rows to load before counting
  await waitFor(() => {
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(2); // 1 header + 1 data row
  });

  expect(screen.getByText("Test Item")).toBeInTheDocument();
});