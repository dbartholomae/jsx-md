/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

interface Props {
  to: string;
  title?: string;
}

export const Link: Component<PropsWithChildren<Props>> = ({
  children,
  to,
  title,
}) => (
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
