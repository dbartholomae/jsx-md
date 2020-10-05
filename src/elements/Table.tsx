/* @jsx MD */
import MD, { Component, Fragment, MarkdownChildren, MarkdownElement } from "..";
import { intersperse } from "../util/intersperse";

export enum TableAlignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

/** @internal */
interface TableColumn {
  width: number;
  alignment?: TableAlignment;
}

/** @internal */
interface TableHeader {
  title: MarkdownChildren;
  alignment?: TableAlignment;
}

/** @internal */
interface Props<Headers extends string> {
  body: Record<Headers, MarkdownChildren>[];
  headers: Record<Headers, MarkdownChildren | TableHeader>;
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTableHeader(value: any): value is TableHeader {
  return value && value.title;
}

/** @internal */
function renderRow(entries: Record<string, MarkdownChildren>): MarkdownElement {
  return (
    <Fragment>
      {Object.values(entries).map((entry: MarkdownChildren, index: number) => (
        <Fragment key={index}>
          {" "}
          {entry}
          {" |"}
        </Fragment>
      ))}
    </Fragment>
  );
}

/** @internal */
function renderSeparator(columns: TableColumn[]): string {
  return columns
    .map((column: TableColumn) => {
      switch (column.alignment) {
        case TableAlignment.LEFT:
          return ` :${"-".repeat(Math.max(column.width - 1, 2))} |`;
        case TableAlignment.CENTER:
          return ` :${"-".repeat(Math.max(column.width - 2, 1))}: |`;
        case TableAlignment.RIGHT:
          return ` ${"-".repeat(Math.max(column.width - 1, 2))}: |`;
        default:
          return ` ${"-".repeat(Math.max(column.width, 3))} |`;
      }
    })
    .join("");
}

/** @internal */
function sortKeysInOrderOf<Obj extends Record<string, unknown>>(
  keys: (keyof Obj)[]
): (obj: Obj) => Obj {
  return (obj: Obj) =>
    keys.reduce((bodyAccumulator, header) => {
      /* istanbul ignore next */
      const { [header]: _omitted, ...bodyWithoutHeader } = bodyAccumulator;
      return {
        ...bodyWithoutHeader,
        [header]: obj[header],
      } as Obj;
    }, obj);
}

/**
 * Creates a markdown table based on a headers object and an array of rows.
 * Columns are ordered in the order in which the header keys were created.
 *
 * @paramType A union of possible keys for headers and body
 * @example
 *   ```js
 *   const headers = {
 *     foo: "Foo header",
 *     bar: { title: "Bar header", alignment: TableAlignment.CENTER },
 *     baz: { title: "Baz header" },
 *   };
 *   const body = [
 *     { foo: "Foo body 1", bar: "Bar body 1", baz: "Baz body 1" },
 *     { foo: "Foo body 2", bar: "Bar body 2", baz: "Baz body 2" },
 *   ];
 *   render(<Table headers={headers} body={body} />)
 *   ===
 *   `
 *   | Foo header | Bar header | Baz header |
 *   | ---------- | :--------: | ---------- |
 *   | Foo body 1 | Bar body 1 | Baz body 1 |
 *   | Foo body 2 | Bar body 2 | Baz body 2 |
 *   `
 */
export function Table<Headers extends string>({
  /** An array of data objects with the same keys as the headers to be displayed as rows. */
  body,
  /**
   * An object giving the headers for each column. The order in which the keys
   * of this object were created determines the order in which the columns
   * are rendered.
   */
  headers,
}: Props<Headers>): ReturnType<Component<Props<Headers>>> {
  const columns = Object.values(headers).map((header) => {
    let width = typeof header !== "string" ? 5 : header.length;
    let alignment;
    if (isTableHeader(header)) {
      ({ alignment } = header);
      if (typeof header.title === "string") {
        width = header.title.length;
      }
    }
    return { width, alignment };
  });

  const normalizedColumns = Object.keys(headers).reduce(
    (normalizedHeaderAccumulator: Record<string, MarkdownChildren>, key) => {
      const header = headers[key as Headers];
      return {
        ...normalizedHeaderAccumulator,
        [key]: isTableHeader(header) ? header.title : header,
      } as Record<string, MarkdownChildren>;
    },
    {}
  );

  const sortedBody = body.map(
    sortKeysInOrderOf(Object.keys(headers) as Headers[])
  );
  return (
    <Fragment>
      {"\n|"}
      {renderRow(normalizedColumns)}
      {"\n|"}
      {renderSeparator(columns)}
      {"\n|"}
      {intersperse(
        sortedBody.map((row) => renderRow(row)),
        "\n|"
      )}
      {"\n"}
    </Fragment>
  );
}
