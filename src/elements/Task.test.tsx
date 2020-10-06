/* @jsx MD */
import MD, { render } from "..";

import { Task } from ".";

describe("Task", () => {
  it("renders to a markdown checked task", async () => {
    expect(await render(<Task checked>Task</Task>)).toBe("- [x] Task\n");
  });

  it("renders to a markdown task", async () => {
    expect(await render(<Task>Task</Task>)).toBe("- [ ] Task\n");
  });
});
