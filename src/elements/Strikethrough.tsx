/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = { children?: MarkdownNode };

export const Strikethrough: Component<Props> = ({ children }) => (
  <Fragment>
    {"~~"}
    {children}
    {"~~"}
  </Fragment>
);
