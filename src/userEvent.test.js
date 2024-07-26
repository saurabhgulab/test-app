import { render, screen } from "@testing-library/react";
import Users from "./userEvent";
import userEvent from "@testing-library/user-event";

test("Test-14: Checking the User Click Functionality in testing.", async () => {
  userEvent.setup();
  render(<Users />);
  const testBtn = screen.getByText("Click Me!");
  await userEvent.click(testBtn);
  expect(screen.getByText("I am clicked")).toBeInTheDocument();
});

test("Test-15: Checking the User Typing Functionality in testing.", async () => {
  userEvent.setup();
  render(<Users />);
  const textBox = screen.getByRole("textbox");
  await userEvent.type(textBox, "admin");
  expect(screen.getByText("admin")).toBeInTheDocument();
});
