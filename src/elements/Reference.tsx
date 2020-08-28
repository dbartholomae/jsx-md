/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = {
  children?: Markdown | Markdown[];
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
