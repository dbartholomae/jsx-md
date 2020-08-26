/* @jsx MD */
import MD from "..";
import { TextNode } from "../dom";

type Props = { children?: TextNode[] };

export function UnorderedList({ children }: Props) {
  if (children === undefined) {
    return undefined;
  }
  return children.map((child) => (
    <md-raw>
      * {child}
      {"\n"}
    </md-raw>
  ));
}
