/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; src: string; title?: string };

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
