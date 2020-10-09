/* @jsx MD */
import MD, { render } from "..";

import { InlineCode } from ".";

describe("InlineCode", () => {
  it("renders the content in ``", async () => {
    expect(await render(<InlineCode>Test</InlineCode>)).toBe("`Test`");
  });
});
