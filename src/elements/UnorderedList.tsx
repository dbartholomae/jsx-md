/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

interface Props {
  children: MarkdownNode[];
}

export const UnorderedList: Component<Props> = ({ children }) => {
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
