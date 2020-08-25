/* @jsx createElement */
import { createElement } from "./createElement";
import { render } from "./render";

describe("render", () => {
  it("renders a text node to its content", () => {
    expect(render(<md-text>Content</md-text>)).toBe("Content");
  });

  it("renders a nested component to its content", () => {
    function Text({ children }: { children?: string }) {
      return <md-text>{children}</md-text>;
    }
    expect(render(<Text>Content</Text>)).toBe("Content");
  });

  it("renders a functional component to its content", () => {
    function Text({ children }: { children?: string }) {
      return <md-text>{children}</md-text>;
    }
    function TestComponent() {
      return <Text>Content</Text>;
    }

    expect(render(<TestComponent />)).toBe("Content");
  });

  it("renders a text node with multiple children to its content", () => {
    expect(
      render(
        <md-text>
          {"More"} {"Content"}
        </md-text>
      )
    ).toBe("More Content");
  });

  it("renders a functional component with an attribute", () => {
    function Component({ attribute }: { attribute: string }) {
      return <md-text>{attribute}</md-text>;
    }
    expect(render(<Component attribute="Test" />)).toBe("Test");
  });
});
