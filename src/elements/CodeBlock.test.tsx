/* @jsx MD */
import MD, { render } from "..";

import { CodeBlock } from ".";

describe("CodeBlock", () => {
  it("returns the wrapped content", async () => {
    expect(await render(<CodeBlock>Test</CodeBlock>)).toBe("```\nTest\n```\n");
  });

  it("returns the wrapped content with a language", async () => {
    expect(
      await render(<CodeBlock language="typescript">Test</CodeBlock>)
    ).toBe("```typescript\nTest\n```\n");
  });
});
