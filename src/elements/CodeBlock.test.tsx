/* @jsx MD */
import MD, { render } from "..";

import { CodeBlock } from ".";

describe("CodeBlock", () => {
  it("returns the wrapped content", () => {
    expect(render(<CodeBlock>Test</CodeBlock>)).toBe("```Test```");
  });
});
