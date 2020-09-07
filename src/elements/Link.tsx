/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = { children?: MarkdownNode; to: string; title?: string };

export const Link: Component<Props> = ({ children, to, title }) => (
  <Fragment>
    {"["}
    {children}
    {"]"}
    {"("}
    {to}
    {title ? ` "${title}"` : null}
    {")"}
  </Fragment>
);
