/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

interface Props {
  label: string;
  title?: string;
}

export const Reference: Component<PropsWithChildren<Props>> = ({
  children,
  label,
  title,
}) => (
  <Fragment>
    {"\n["}
    {label}
    {"]: "}
    {children}
    {title ? ` "${title}"` : null}
    {"\n"}
  </Fragment>
);
