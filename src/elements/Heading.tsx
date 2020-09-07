/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = {
  children?: MarkdownNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading: Component<Props> = ({ children, level }) => (
  <Fragment>
    {"#".repeat(level)} {children}
    {"\n\n"}
  </Fragment>
);
