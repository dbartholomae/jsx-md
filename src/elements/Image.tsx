/* @jsx MD */
import MD, { Component, Fragment } from "..";

type Props = { children: string; src: string; title?: string };

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
