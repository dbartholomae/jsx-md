/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = { children?: MarkdownNode[] };

export const OrderedList: Component<Props> = ({ children }) => {
  if (children === undefined) {
    return null;
  }
  return (
    <Fragment>
      {children.map((child, index) => (
        <Fragment key={index}>
          {index + 1}. {child}
          {"\n"}
        </Fragment>
      ))}
    </Fragment>
  );
};
