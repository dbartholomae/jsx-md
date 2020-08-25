/* @jsx MD */
import MD from "..";

import { DOMElement } from "../dom";

type Props = {
  children?: DOMElement;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export function Heading({ children, level }: Props) {
  return (
    <md-text>
      {"#".repeat(level)} {children}
    </md-text>
  );
}
