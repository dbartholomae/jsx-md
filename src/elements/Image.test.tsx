/* @jsx MD */
import MD, { render } from "..";

import { Image } from ".";

describe("Image", () => {
  it("renders to a markdown image without title", async () => {
    expect(
      await render(<Image src="./image.png">Alternative text</Image>)
    ).toBe("![Alternative text](./image.png)");
  });

  it("renders to a markdown image with a title", async () => {
    expect(
      await render(
        <Image src="./image.png" title="Title">
          Alternative text
        </Image>
      )
    ).toBe('![Alternative text](./image.png "Title")');
  });
});
