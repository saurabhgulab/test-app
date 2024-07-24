import { fireEvent, render, screen } from "@testing-library/react";
import Users from "./functionalComponent";

test("Test 3: Check for Functional Component", () => {
  render(<Users />);
  const checkBtn = screen.getByTestId("btn");
  fireEvent.click(checkBtn);
  expect(screen.getByText("Functional Component Test Passed"))
    .toBeInTheDocument;
});
