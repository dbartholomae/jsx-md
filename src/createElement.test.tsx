/* @jsx createElement */
import { createElement } from "./createElement";

describe("createElement", () => {
  it("converts the string result of a functional component to an element", () => {
    function Component() {
      return "text";
    }
    expect(<Component />).toEqual({
      nodeName: "md-text",
      nodeValue: "text",
    });
  });
});
