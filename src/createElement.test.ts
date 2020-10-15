import { createElement } from "./createElement";
import { Await, MdAwaitType } from ".";

describe("createElement", () => {
  it("throws an error if a lower-case component is used", () => {
    // @ts-expect-error - lower-case element test does not exist
    expect(() => createElement("test", {}, "Test")).toThrowError(
      "Unsupported lower-case element 'test' encountered, please make sure all your components start with an upper-case letter and are functions."
    );
  });

  it("throws an error if md-await has multiple children", () => {
    expect(() =>
      createElement(
        // @ts-expect-error - await element test multiple promises as children
        MdAwaitType,
        {},
        Promise.resolve("Test"),
        Promise.resolve("Test")
      )
    ).toThrowError("Received 2 promises, expected a single promise.");
  });

  it("creates a await element if a single promise is used", () => {
    expect(
      // @ts-expect-error - await element test single promise as children
      createElement(MdAwaitType, {}, Promise.resolve("Test"))
    ).toMatchObject({
      key: null,
      props: { children: Promise.resolve("Test") },
      type: MdAwaitType,
    });
  });
});
