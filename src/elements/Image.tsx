/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = { children?: MarkdownNode; src: string; title?: string };

export const Image: Component<Props> = ({ children, src, title }) => (
  <Fragment>
    {"!["}
    {children}
    {"]"}
    {"("}
    {src}
    {title ? ` "${title}"` : null}
    {")"}
  </Fragment>
);
