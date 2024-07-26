import { render, screen, within } from "@testing-library/react";
import Users from "./parentChild";

test("Test-12: Checking the parent element using within Library", () => {
  render(<Users />);
  let parent = screen.getByText("Parent Element");
  expect(parent).toBeInTheDocument();
});

test("Test-13: Checking the child elements using within Library", () => {
  render(<Users />);
  let parent = screen.getByText("Parent Element");
  let child1 = within(parent).getByText("Child 1");
  let child2 = within(parent).getByText("Child 2");
  expect(parent).toBeInTheDocument();
  expect(child1).toBeInTheDocument();
  expect(child2).toBeInTheDocument();
});
