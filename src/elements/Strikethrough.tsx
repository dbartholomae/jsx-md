/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[] };

export function Strikethrough({ children }: Props): Markdown | Markdown[] {
  return (
    <Fragment>
      {"~~"}
      {children}
      {"~~"}
    </Fragment>
  );
}
