/* @jsx MD */
import MD, { render } from "..";

import { BlockQuote } from ".";

describe("BlockQuote", () => {
  it("returns '' if no children are set", () => {
    expect(render(<BlockQuote />)).toBe("");
  });

  it("adds '> ' to the beginning of a line", () => {
    expect(render(<BlockQuote>Test</BlockQuote>)).toBe("\n> Test\n");
  });

  it("adds '> ' after each linebreak", () => {
    expect(render(<BlockQuote>Test{"\n"}Test 2</BlockQuote>)).toBe(`
> Test
> Test 2
`);
  });
});
