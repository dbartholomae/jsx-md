/* @jsx MD */
import MD, { render } from "..";

import { Text } from ".";

describe("Text", () => {
  it("renders to the children", async () => {
    expect(await render(<Text>Test</Text>)).toBe("Test");
  });

  it("renders correctly with some children being null", async () => {
    expect(await render(<Text>Test{null}</Text>)).toBe("Test");
  });

  it("escapes multiple instances in the same string", async () => {
    expect(await render(<Text>(Parantheses in [parantheses])</Text>)).toBe(
      "\\(Parantheses in \\[parantheses\\]\\)"
    );
  });

  it.each([
    "\\",
    "`",
    "*",
    "_",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    "#",
    "+",
    "-",
    ".",
    "!",
  ])("escapes %s", async (char: string) => {
    expect(await render(<Text>{char}</Text>)).toBe(`\\${char}`);
  });

  it.each([
    "\\",
    "`",
    "*",
    "_",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    "#",
    "+",
    "-",
    ".",
    "!",
  ])("escapes two elements of %s", async (char: string) => {
    expect(
      await render(
        <Text>
          {char}
          {char}
        </Text>
      )
    ).toBe(`\\${char}\\${char}`);
  });
});
