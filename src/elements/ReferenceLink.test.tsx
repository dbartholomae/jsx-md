/* @jsx MD */
import MD, { render } from "..";

import { ReferenceLink } from ".";

describe("ReferenceLink", () => {
  it("renders to a markdown link without reference", () => {
    expect(render(<ReferenceLink>Test</ReferenceLink>)).toBe("[Test]");
  });

  it("renders to a markdown link with reference", () => {
    expect(render(<ReferenceLink reference="1">Test</ReferenceLink>)).toBe(
      "[Test][1]"
    );
  });
});
