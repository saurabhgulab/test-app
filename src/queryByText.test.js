import { render, screen } from "@testing-library/react";
import Users from "./queryByText";

test("Test-10: Checking for Hidden Texts in the UI", () => {
  render(<Users />);
  const value1 = screen.queryByText("Log In");
  const value2 = screen.queryByText("Log Out");
  expect(value1).not.toBeInTheDocument();
  expect(value2).toBeInTheDocument();
});
