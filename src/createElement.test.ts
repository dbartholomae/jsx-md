import { createElement } from "./createElement";
import { Await, MdAwaitType } from ".";

describe("createElement", () => {
  it("throws an error if a lower-case component is used", () => {
    // @ts-expect-error - lower-case element test does not exist
    expect(() => createElement("test", {}, "Test")).toThrowError(
      "Unsupported lower-case element 'test' encountered, please make sure all your components start with an upper-case letter and are functions."
    );
  });

  it("throws an error if a multiple children detected for promise element", () => {
    expect(() =>
      // @ts-expect-error - await element test multiple promises as children
      createElement(Await, {}, Promise.resolve("Test"), Promise.resolve("Test"))
    ).toThrowError(
      "<Await> expected to receive a single promise that resolves to any markdown children."
    );
  });

  it("creates a await element if a single promise is used", () => {
    expect(
      // @ts-expect-error - await element test single promise as children
      createElement(Await, {}, Promise.resolve("Test"))
    ).toMatchObject({
      key: null,
      props: { children: Promise.resolve("Test") },
      type: MdAwaitType,
    });
  });
});
