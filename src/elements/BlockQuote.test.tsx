/* @jsx MD */
import MD, { render } from "..";

import { BlockQuote } from ".";

describe("BlockQuote", () => {
  it("adds '> ' to the beginning of a line", async () => {
    expect(await render(<BlockQuote>Test</BlockQuote>)).toBe("\n> Test\n");
  });

  it("adds '> ' after each linebreak", async () => {
    expect(await render(<BlockQuote>Test{"\n"}Test 2</BlockQuote>)).toBe(`
> Test
> Test 2
`);
  });
});
