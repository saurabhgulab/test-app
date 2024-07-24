import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test 1: Check for text element on Screen", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
