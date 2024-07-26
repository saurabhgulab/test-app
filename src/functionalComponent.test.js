import { fireEvent, render, screen } from "@testing-library/react";
import Users from "./functionalComponent";
import handleConsolePrint from "./handleConsole";

test("Test 3: Check for Functional Component", () => {
  render(<Users />);
  const checkBtn = screen.getByTestId("btn");
  fireEvent.click(checkBtn);
  expect(screen.getByText("Functional Component Test Passed"))
    .toBeInTheDocument;
});

test("Test 4: Check for Console component", () => {
  expect(handleConsolePrint()).toBe("I am present");
});
