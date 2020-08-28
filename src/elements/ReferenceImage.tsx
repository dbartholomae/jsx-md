/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; reference: string };

export const ReferenceImage: Component<Props> = ({ children, reference }) => (
  <Fragment>
    {"!["}
    {children}
    {"]"}
    {"["}
    {reference}
    {"]"}
  </Fragment>
);
