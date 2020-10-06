/* @jsx MD */
import MD, { render } from "..";

import { HorizontalRule } from ".";

describe("Horizontal Rule", () => {
  it("returns --- with empty lines", async () => {
    expect(await render(<HorizontalRule />)).toBe("\n---\n");
  });
});
