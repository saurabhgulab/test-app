import { render, screen } from "@testing-library/react";
import Users from "./getAllByRole";

test("Test 5: Checking for getAllByRoles in any Functional Component", () => {
  render(<Users />);
  const buttons = screen.getAllByRole("button"); //since the output is provided in the form of an array.
  for (let i = 0; i < buttons.length; i++) {
    expect(buttons[i]).toBeInTheDocument();
  }
});
