/* @jsx MD */
/* @jsxFrag Fragment */
import MD, { render } from "..";
import { Fragment } from ".";

describe("Fragment", () => {
  it("renders a single component", () => {
    expect(render(<>Test</>)).toEqual("Test");
  });
});
