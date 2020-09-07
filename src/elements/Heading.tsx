/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading: Component<PropsWithChildren<Props>> = ({
  children,
  level,
}) => (
  <Fragment>
    {"#".repeat(level)} {children}
    {"\n\n"}
  </Fragment>
);
