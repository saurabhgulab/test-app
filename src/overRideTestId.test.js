import { configure, render, screen } from "@testing-library/react";
import Users from "./overRideTestId";
configure({ testIdAttribute: "id" });

test("Test-9: Checking for testId by Overring It.", () => {
  render(<Users />);
  const check = screen.getByTestId(`config`);
  expect(check).toBeInTheDocument();
});
