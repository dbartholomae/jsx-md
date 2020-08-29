/* @jsx MD */
import MD, { Component, render } from "..";

import { UnorderedList } from ".";

describe("UnorderedList", () => {
  it("returns '' if no children are set", () => {
    expect(render(<UnorderedList />)).toBe("");
  });

  it("wraps each child with a linebreak and a *", () => {
    expect(
      render(
        <UnorderedList>
          {"a"}
          {"b"}
          {"c"}
        </UnorderedList>
      )
    ).toBe(`* a
* b
* c
`);
  });

  it("wraps nested components", () => {
    type Props = { children?: string };
    const TestComponent: Component<Props> = ({ children }) => children;
    expect(
      render(
        <UnorderedList>
          <TestComponent>a</TestComponent>
          <TestComponent>b</TestComponent>
          <TestComponent>c</TestComponent>
        </UnorderedList>
      )
    ).toBe(`* a
* b
* c
`);
  });
});
