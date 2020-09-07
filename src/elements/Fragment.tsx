/* @jsx MD */
import MD, { Component, MarkdownChildren } from "..";

interface Props {
  children: MarkdownChildren;
}

export const Fragment: Component<Props> = ({ children }) => (
  <mdFragment>{children}</mdFragment>
);
