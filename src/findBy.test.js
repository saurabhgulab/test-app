import { render, screen } from "@testing-library/react";
import Users from "./findBy";

test("Test-11: Checking the functionality of findBy and findByAll", async () => {
  render(<Users />);
  const value = await screen.findByText("data found", {}, { timeout: 3000 });
  expect(value).toBeInTheDocument();
});
