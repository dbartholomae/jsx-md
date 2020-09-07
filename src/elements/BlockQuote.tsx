/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

export const BlockQuote: Component<PropsWithChildren> = ({ children }) => {
  if (children === undefined) {
    return null;
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
