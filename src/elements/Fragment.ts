import { Component, Markdown } from "../model";

type Props = { children?: Markdown | Markdown[] };

export const Fragment: Component<Props> = ({ children }) =>
  Array.isArray(children) ? children.join("") : children;
