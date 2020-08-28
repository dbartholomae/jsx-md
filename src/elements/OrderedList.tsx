/* @jsx MD */
import MD, { Component, Fragment } from "..";

type Props = { children?: string[] };

export const OrderedList: Component<Props> = ({ children }) => {
  if (children === undefined) {
    return undefined;
  }
  return (
    <Fragment>
      {children.map((child, index) => `${index + 1}. ${child}\n`)}
    </Fragment>
  );
};
