/* @jsx MD */
import MD from "..";

type Props = { children?: string };

export function CodeBlock({ children }: Props) {
  return <md-text>```{children}```</md-text>;
}
