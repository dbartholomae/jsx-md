/* @jsx MD */
import MD, { render } from "..";

import { Task } from ".";

describe("Task", () => {
  it("renders to a markdown checked task", () => {
    expect(render(<Task checked>Task</Task>)).toBe("- [x] Task\n");
  });

  it("renders to a markdown task", () => {
    expect(render(<Task>Task</Task>)).toBe("- [ ] Task\n");
  });
});
