/* @jsx MD */
import MD, { Component, Fragment } from "..";

type Props = { children?: string; strong?: boolean };

export const Emphasis: Component<Props> = ({ children, strong }) => {
  const marker = strong ? "**" : "_";
  return (
    <Fragment>
      {marker}
      {children}
      {marker}
    </Fragment>
  );
};
