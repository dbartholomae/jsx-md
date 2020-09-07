/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

export const Strikethrough: Component<PropsWithChildren> = ({ children }) => (
  <Fragment>
    {"~~"}
    {children}
    {"~~"}
  </Fragment>
);
