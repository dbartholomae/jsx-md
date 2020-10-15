/* @jsx MD */
import MD, { Component, Text, Await } from ".";
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

  it("throws an error when rendering a promise that rejects with an error", async () => {
    await expect(render(<Await>{Promise.reject("invalid")}</Await>)).toReject();
  });

  it("renders a promise that resolves to a nested component to its content", async () => {
    expect(
      await render(<Await>{Promise.resolve(<Text>Content</Text>)}</Await>)
    ).toBe("Content");
  });

  it("renders a promise that resolves to a functional component to its content", async () => {
    const TestComponent: Component = () => <Text>Content</Text>;

    expect(
      await render(<Await>{Promise.resolve(<TestComponent />)}</Await>)
    ).toBe("Content");
  });

  it("renders a promise that resolves to a functional component with an attribute", async () => {
    type Props = { attribute: string };
    const TestComponent: Component<Props> = ({ attribute }) => (
      <Text>{attribute}</Text>
    );
    expect(
      await render(
        <Await>{Promise.resolve(<TestComponent attribute="Test" />)}</Await>
      )
    ).toBe("Test");
  });
});
