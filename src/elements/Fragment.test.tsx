/* @jsx MD */
import MD, { render } from "..";
import { Fragment } from ".";

describe("Fragment", () => {
  it("renders a single component", () => {
    expect(render(<Fragment>Test</Fragment>)).toEqual("Test");
  });
});
