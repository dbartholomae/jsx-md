/* @jsx MD */
import MD, { Component, Fragment, MarkdownChildren, MarkdownElement } from "..";
import { intersperse } from "../util/intersperse";

type Props<Headers extends string> = {
  body: Record<Headers, MarkdownChildren>[];
  headers: Record<Headers, MarkdownChildren>;
};

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

function renderSeparator(columnWidths: number[]): string {
  return columnWidths
    .map((width: number) => ` ${"-".repeat(width)} |`)
    .join("");
}

function sortKeysInOrderOf<Obj extends Record<string, unknown>>(
  keys: (keyof Obj)[]
): (obj: Obj) => Obj {
  return (obj: Obj) =>
    keys.reduce((bodyAccumulator, header) => {
      const { [header]: omitted, ...bodyWithoutHeader } = bodyAccumulator;
      return {
        ...bodyWithoutHeader,
        [header]: obj[header],
      } as Obj;
    }, obj);
}

export function Table<Headers extends string>({
  body,
  headers,
}: Props<Headers>): ReturnType<Component<Props<Headers>>> {
  const columnWidths = Object.values(headers).map((header) => {
    if (typeof header !== "string") {
      return 5;
    }
    return header.length;
  });

  const sortedBody = body.map(
    sortKeysInOrderOf(Object.keys(headers) as Headers[])
  );
  return (
    <Fragment>
      {"\n|"}
      {renderRow(headers)}
      {"\n|"}
      {renderSeparator(columnWidths)}
      {"\n|"}
      {intersperse(
        sortedBody.map((row) => renderRow(row)),
        "\n|"
      )}
      {"\n"}
    </Fragment>
  );
}
