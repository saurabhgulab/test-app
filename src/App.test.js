import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test 1: Check for text element on Screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Test 16: Testing for Headers", () => {
  render(<App />);
  const el = screen.getByText("Testing API for Data Fetching");
  expect(el).toBeInTheDocument();
});

test("Test 17: Testing API for Data Fetching", async () => {
  render(<App />);
  const dataLength = await screen.findAllByRole("listitem");
  expect(dataLength).toHaveLength(10);
});
