/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

interface Props {
  reference?: string;
}

export const ReferenceLink: Component<PropsWithChildren<Props>> = ({
  children,
  reference,
}) => (
  <Fragment>
    {"["}
    {children}
    {"]"}
    {reference ? (
      <Fragment>
        {"["}
        {reference}
        {"]"}
      </Fragment>
    ) : null}
  </Fragment>
);
