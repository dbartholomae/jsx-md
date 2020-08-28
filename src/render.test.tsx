/* @jsx createElement */
import { createElement } from "./createElement";
import { render } from "./render";

describe("render", () => {
  it("renders a string to itself", () => {
    expect(render("Content")).toBe("Content");
  });

  it("renders a nested component to its content", () => {
    function Text({ children }: { children?: string }) {
      return children;
    }
    expect(render(<Text>Content</Text>)).toBe("Content");
  });

  it("renders a functional component to its content", () => {
    function Text({ children }: { children?: string }) {
      return children;
    }
    function TestComponent() {
      return <Text>Content</Text>;
    }

    expect(render(<TestComponent />)).toBe("Content");
  });

  it("renders an array its concatenation", () => {
    expect(render(["More", " ", "Content"])).toBe("More Content");
  });

  it("renders a functional component with an attribute", () => {
    function Component({ attribute }: { attribute: string }) {
      return attribute;
    }
    expect(render(<Component attribute="Test" />)).toBe("Test");
  });
});
