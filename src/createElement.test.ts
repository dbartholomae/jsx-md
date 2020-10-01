import { createElement } from "./createElement";

describe("createElement", () => {
  it("throws an error if a lower-case component is used", () => {
    // @ts-expect-error - lower-case element test does not exist
    expect(() => createElement("test", {}, "Test")).toThrowError(
      "Unsupported lower-case element 'test' encountered, please make sure all your components start with an upper-case letter and are functions."
    );
  });
});
