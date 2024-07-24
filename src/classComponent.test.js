import Users from "./classComponent";
import renderer from "react-test-renderer";

test("Test 2: Check for render functionality in Class Component", () => {
  const checkData = renderer.create(<Users />).getInstance();
  expect(checkData.getUser()).toMatch("class component running fine.");
});
