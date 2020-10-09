/* @jsx MD */
import MD, { render, Text } from "..";

import { Table, TableAlignment } from ".";

describe("Table", () => {
  it("returns the table in Markdown from text", async () => {
    const headers = {
      foo: "Foo header",
      bar: "Bar header",
    };
    const body = [
      { foo: "Foo body 1", bar: "Bar body 1" },
      { foo: "Foo body 2", bar: "Bar body 2" },
    ];
    expect(await render(<Table headers={headers} body={body} />)).toBe(`
| Foo header | Bar header |
| ---------- | ---------- |
| Foo body 1 | Bar body 1 |
| Foo body 2 | Bar body 2 |
`);
  });

  it("sorts the columns based on the key order in the headers object", async () => {
    const headers = {
      foo: "Foo header",
      bar: "Bar header",
    };
    const body = [
      { bar: "Bar body 1", foo: "Foo body 1" },
      { foo: "Foo body 2", bar: "Bar body 2" },
    ];
    expect(await render(<Table headers={headers} body={body} />)).toBe(`
| Foo header | Bar header |
| ---------- | ---------- |
| Foo body 1 | Bar body 1 |
| Foo body 2 | Bar body 2 |
`);
  });

  it("returns the table in Markdown from components", async () => {
    const headers = {
      foo: <Text>Foo header</Text>,
      bar: <Text>Bar header</Text>,
    };
    const body = [
      { foo: <Text>Foo body 1</Text>, bar: <Text>Bar body 1</Text> },
      { foo: <Text>Foo body 2</Text>, bar: <Text>Bar body 2</Text> },
    ];
    expect(await render(<Table headers={headers} body={body} />)).toBe(`
| Foo header | Bar header |
| ----- | ----- |
| Foo body 1 | Bar body 1 |
| Foo body 2 | Bar body 2 |
`);
  });

  it("returns the table in Markdown from text with partial alignment", async () => {
    const headers = {
      foo: "Foo header",
      bar: {
        title: "Bar header",
        alignment: TableAlignment.RIGHT,
      },
    };
    const body = [
      { foo: "Foo body 1", bar: "Bar body 1" },
      { foo: "Foo body 2", bar: "Bar body 2" },
    ];
    expect(await render(<Table headers={headers} body={body} />)).toBe(`
| Foo header | Bar header |
| ---------- | ---------: |
| Foo body 1 | Bar body 1 |
| Foo body 2 | Bar body 2 |
`);
  });

  it("returns the table in Markdown from text with short component headers and alignment", async () => {
    const headers = {
      foo: { title: <Text>F</Text>, alignment: TableAlignment.CENTER },
      bar: { title: <Text>B</Text>, alignment: TableAlignment.LEFT },
    };
    const body = [
      { foo: "Foo body 1", bar: "Bar body 1" },
      { foo: "Foo body 2", bar: "Bar body 2" },
    ];
    expect(await render(<Table headers={headers} body={body} />)).toBe(`
| F | B |
| :---: | :---- |
| Foo body 1 | Bar body 1 |
| Foo body 2 | Bar body 2 |
`);
  });
});
