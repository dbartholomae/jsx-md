/* @jsx MD */
import MD, { Component, Fragment } from "..";

interface Props {
  children: string | string[];
}

export const BlockQuote: Component<Props> = ({ children }) => {
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
