/* @jsx MD */
import MD, { render } from "..";

import { Strikethrough } from ".";

describe("Strikethrough", () => {
  it("renders to the children wrapped in ~~", async () => {
    expect(await render(<Strikethrough>Test</Strikethrough>)).toBe("~~Test~~");
  });
});
