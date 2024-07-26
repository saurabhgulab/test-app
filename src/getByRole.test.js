import { screen, render } from "@testing-library/react";
import Users from "./getByRole";

test("Test-6: Checking for getByRole on an Input/TextBox", () => {
  render(<Users />);
  const testInput = screen.getByRole("textbox", { name: "Testing Input" });
  expect(testInput).toBeInTheDocument();
});

test("Test-7: Checking for getByRole on any Button", () => {
  render(<Users />);
  const testButton = screen.getByRole("button", { name: "Testing Button" });
  expect(testButton).toBeInTheDocument();
});

test("Test-8: Checking for getByLabelText on a Label", () => {
  render(<Users />);
  const testLabel = screen.getByLabelText("Testing Input");
  expect(testLabel).toBeInTheDocument();
});
