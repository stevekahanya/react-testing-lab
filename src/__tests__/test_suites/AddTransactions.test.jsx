import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import App from "../../components/App";

test("adds a new transaction to the frontend and calls POST", async () => {
  const initialData = [];
  const newData = { id: 2, date: "2024-02-02", description: "New Gear", category: "Fashion", amount: 50 };
  
  global.setFetchResponse(initialData);

  render(<App />);

  // Mock the POST request
  const postMock = vi.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve(newData),
      ok: true,
    })
  );
  global.fetch = postMock;

  // Fill the form
  fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "New Gear" } });
  fireEvent.change(screen.getByPlaceholderText("Category"), { target: { value: "Fashion" } });
  fireEvent.change(screen.getByPlaceholderText("Amount"), { target: { value: "50" } });
  
  fireEvent.click(screen.getByText("Add Transaction"));

  const newItem = await screen.findByText("New Gear");
  expect(newItem).toBeInTheDocument();
  expect(postMock).toHaveBeenCalled(); // Verify POST request was called
});