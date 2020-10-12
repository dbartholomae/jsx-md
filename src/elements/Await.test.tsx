/* @jsx MD */
import MD, { render } from "..";

import { Text, Await } from ".";

describe("Await", () => {
  it("renders a single promise that resolves to a string", async () => {
    expect(await render(<Await>{Promise.resolve("Test")}</Await>)).toEqual(
      "Test"
    );
  });

  it("renders a single promise that resolves to a component", async () => {
    expect(
      await render(<Await>{Promise.resolve(<Text>Test</Text>)}</Await>)
    ).toEqual("Test");
  });

  it("throws an error if the promise is rejected", async () => {
    await expect(render(<Await>{Promise.reject("invalid")}</Await>)).toReject();
  });
});
