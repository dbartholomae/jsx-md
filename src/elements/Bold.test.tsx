/* @jsx MD */
import MD, { render } from "..";

import { Bold } from ".";

describe("Bold", () => {
  it("renders the content in ****", () => {
    expect(render(<Bold>Test</Bold>)).toBe("**Test**");
  });
});
