/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

interface Props {
  reference: string;
}

export const ReferenceImage: Component<PropsWithChildren<Props>> = ({
  children,
  reference,
}) => (
  <Fragment>
    {"!["}
    {children}
    {"]"}
    {"["}
    {reference}
    {"]"}
  </Fragment>
);
