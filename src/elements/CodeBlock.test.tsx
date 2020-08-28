/* @jsx MD */
import MD, { render } from "..";

import { CodeBlock } from ".";

describe("CodeBlock", () => {
  it("returns the wrapped content", () => {
    expect(render(<CodeBlock>Test</CodeBlock>)).toBe("\n```\nTest\n```\n");
  });

  it("returns the wrapped content with a language", () => {
    expect(render(<CodeBlock language="typescript">Test</CodeBlock>)).toBe(
      "\n```typescript\nTest\n```\n"
    );
  });
});
