/* @jsx MD */
import MD, { render } from "..";

import { LineBreak } from ".";

describe("LineBreak", () => {
  it("returns \\n", async () => {
    expect(await render(<LineBreak />)).toBe("\n");
  });
});
