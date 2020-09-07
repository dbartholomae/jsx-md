/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = {
  children?: MarkdownNode;
  label: string;
  title?: string;
};

export const Reference: Component<Props> = ({ children, label, title }) => (
  <Fragment>
    {"\n["}
    {label}
    {"]: "}
    {children}
    {title ? ` "${title}"` : null}
    {"\n"}
  </Fragment>
);
