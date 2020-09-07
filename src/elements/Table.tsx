/* @jsx MD */
import MD, { Component, Fragment } from "..";

type Props<Headers extends string> = {
  body: Record<Headers, string>[];
  headers: Record<Headers, string>;
};

function renderRow(entries: Record<string, string>): string {
  return Object.values(entries)
    .map((entry: string) => ` ${entry} |`)
    .join("");
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
  // TODO: remove type assertion once TypeScript correctly runs inference.
  //  See https://github.com/microsoft/TypeScript/issues/40419
  const columnWidths = (Object.values(headers) as string[]).map(
    (header: string) => header.length
  );
  return (
    <Fragment>
      {"\n|"}
      {renderRow(headers)}
      {"\n|"}
      {renderSeparator(columnWidths)}
      {"\n|"}
      {body.map((row) => renderRow(row)).join("\n|")}
      {"\n"}
    </Fragment>
  );
}
