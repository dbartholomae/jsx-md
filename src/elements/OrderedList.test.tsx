/* @jsx MD */
import MD, { render } from "..";

import { OrderedList } from ".";

describe("OrderedList", () => {
  it("wraps each child with a linebreak and a continuosly increasing number", () => {
    expect(
      render(
        <OrderedList>
          {"a"}
          {"b"}
          {"c"}
        </OrderedList>
      )
    ).toBe(`1. a
2. b
3. c
`);
  });

  it("wraps nested components", () => {
    function Component({ children }: { children?: string }) {
      return children;
    }
    expect(
      render(
        <OrderedList>
          <Component>a</Component>
          <Component>b</Component>
          <Component>c</Component>
        </OrderedList>
      )
    ).toBe(`1. a
2. b
3. c
`);
  });
});
