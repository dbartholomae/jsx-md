/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[] };

export const BlockQuote: Component<Props> = ({ children }) => {
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
};
