/* @jsx MD */
import MD, { render } from "..";

import { Table } from ".";

describe("Table", () => {
  it("returns the table in Markdown", () => {
    const headers = {
      foo: "Foo header",
      bar: "Bar header",
    };
    const body = [
      { foo: "Foo body 1", bar: "Bar body 1" },
      { foo: "Foo body 2", bar: "Bar body 2" },
    ];
    expect(render(<Table headers={headers} body={body} />)).toBe(`
| Foo header | Bar header |
| ---------- | ---------- |
| Foo body 1 | Bar body 1 |
| Foo body 2 | Bar body 2 |
`);
  });
});
