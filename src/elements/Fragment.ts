import { Component, MarkdownChildren, MdFragmentType } from "../model";

interface Props {
  children: MarkdownChildren;
}
// TODO: Use md-fragment instead
export const Fragment: Component<Props> = ({ children }) => ({
  props: {
    children: Array.isArray(children) ? children.flat() : children,
  },
  key: null,
  type: MdFragmentType,
});
