/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[] };

export function BlockQuote({ children }: Props) {
  if (children === undefined) {
    return undefined;
  }
  if (!Array.isArray(children)) {
    return (
      <Fragment>
        {"\n"}
        {">"} {children}
        {"\n"}
      </Fragment>
    );
  }
  return (
    <Fragment>
      {"\n"}
      {">"} {children.flat().join("").split("\n").join("\n> ")}
      {"\n"}
    </Fragment>
  );
}
