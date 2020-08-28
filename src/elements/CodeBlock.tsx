/* @jsx MD */
import MD, { Fragment } from "..";

type Props = { children?: string };

export function CodeBlock({ children }: Props) {
  return <Fragment>```{children}```</Fragment>;
}
