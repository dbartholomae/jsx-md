/* @jsx createElement */
import { createElement } from "./createElement";
import { Component, Text } from ".";
import { render } from "./render";

describe("render", () => {
  it("throws an error when rendering an invalid element", async () => {
    await expect(
      render({
        // @ts-expect-error - invalid element type is not assignable
        type: "invalid element type",
        key: null,
        props: {},
      })
    ).toReject();
  });

  it("renders a nested component to its content", async () => {
    expect(await render(<Text>Content</Text>)).toBe("Content");
  });

  it("renders a functional component to its content", async () => {
    const TestComponent: Component = () => <Text>Content</Text>;

    expect(await render(<TestComponent />)).toBe("Content");
  });

  it("renders a functional component with an attribute", async () => {
    type Props = { attribute: string };
    const TestComponent: Component<Props> = ({ attribute }) => (
      <Text>{attribute}</Text>
    );
    expect(await render(<TestComponent attribute="Test" />)).toBe("Test");
  });
});
