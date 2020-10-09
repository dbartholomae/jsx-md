/* @jsx MD */
import MD, { Component, render } from "..";

import { Text, UnorderedList } from ".";

describe("UnorderedList", () => {
  it("wraps each child with a linebreak and a *", async () => {
    expect(
      await render(
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

  it("wraps nested components", async () => {
    type Props = { children?: string };
    const TestComponent: Component<Props> = ({ children }) => (
      <Text>{children}</Text>
    );
    expect(
      await render(
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
