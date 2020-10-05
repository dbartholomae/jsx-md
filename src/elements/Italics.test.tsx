/* @jsx MD */
import MD, { render } from "..";

import { Italics } from ".";

describe("Italics", () => {
  it("renders the content in __", () => {
    expect(render(<Italics>Test</Italics>)).toBe("_Test_");
  });
});
