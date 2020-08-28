import fs from "fs";
import "./README.md.tsx";

describe("README creation script", () => {
  it("creates the README file of the repo", async () => {
    const expectedFile = fs.readFileSync("./README.md", { encoding: "utf8" });
    const actualFile = fs.readFileSync("./examples/README.md", {
      encoding: "utf8",
    });
    expect(actualFile).toBe(expectedFile);
  });
});
