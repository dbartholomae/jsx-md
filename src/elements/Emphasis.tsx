/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

interface Props {
  strong?: boolean;
}

export const Emphasis: Component<PropsWithChildren<Props>> = ({
  children,
  strong,
}) => {
  const marker = strong ? "**" : "_";
  return (
    <Fragment>
      {marker}
      {children}
      {marker}
    </Fragment>
  );
};
