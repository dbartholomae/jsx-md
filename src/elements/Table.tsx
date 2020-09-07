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
  return (
    <Fragment>
      {"\n|"}
      {renderRow(headers)}
      {"\n|"}
      {renderSeparator(columnWidths)}
      {"\n|"}
      {intersperse(
        body.map((row) => renderRow(row)),
        "\n|"
      )}
      {"\n"}
    </Fragment>
  );
}
