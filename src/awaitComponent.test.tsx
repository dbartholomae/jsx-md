/* @jsx MD */
import MD, { awaitComponent, Component, render } from ".";

import { Text } from "./elements";

describe("awaitComponent", () => {
  it("renders to the return value of the wrapped component", async () => {
    const AsyncText: Component = awaitComponent(async () => <Text>Test</Text>);
    expect(await render(<AsyncText />)).toEqual("Test");
  });

  it("passes through all props", async () => {
    interface Props {
      children: string;
    }
    const AsyncText: Component<Props> = awaitComponent(async ({ children }) => (
      <Text>{children}</Text>
    ));

    expect(await render(<AsyncText>Test</AsyncText>)).toEqual("Test");
  });
});
