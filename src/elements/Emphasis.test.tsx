/* @jsx MD */
import MD, { render } from "..";

import { Emphasis } from ".";

describe("Emphasis", () => {
  it("returns the wrapped content", async () => {
    expect(await render(<Emphasis>Test</Emphasis>)).toBe("_Test_");
  });

  it("strongly returns the wrapped content", async () => {
    expect(await render(<Emphasis strong>Test</Emphasis>)).toBe("**Test**");
  });
});
