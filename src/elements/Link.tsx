/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; to: string; title?: string };

export function Link({ children, to, title }: Props): Markdown | Markdown[] {
  return (
    <Fragment>
      {"["}
      {children}
      {"]"}
      {"("}
      {to}
      {title ? ` "${title}"` : null}
      {")"}
    </Fragment>
  );
}
