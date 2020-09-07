/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = { children?: MarkdownNode[] };

export const UnorderedList: Component<Props> = ({ children }) => {
  if (children === undefined) {
    return null;
  }
  return (
    <Fragment>
      {children.map((child, index) => (
        <Fragment key={index}>
          * {child}
          {"\n"}
        </Fragment>
      ))}
    </Fragment>
  );
};
