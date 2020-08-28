/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[] };

export const Strikethrough: Component<Props> = ({ children }) => (
  <Fragment>
    {"~~"}
    {children}
    {"~~"}
  </Fragment>
);
