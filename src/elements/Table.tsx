/* @jsx MD */
import MD, { Component, Fragment } from "..";

type KeyedHashMap<Keys extends string, Value> = { [key in Keys]: Value };
type Props<Headers extends string> = {
  body: KeyedHashMap<Headers, string>[];
  headers: KeyedHashMap<Headers, string>;
};

function renderRow<Headers extends string>(
  entries: KeyedHashMap<Headers, string>
): string {
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
  const columnWidths = Object.values(headers).map(
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
