/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; to: string; title?: string };

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
