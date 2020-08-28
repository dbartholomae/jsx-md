/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; src: string; title?: string };

export function Image({ children, src, title }: Props): Markdown | Markdown[] {
  return (
    <Fragment>
      {"!["}
      {children}
      {"]"}
      {"("}
      {src}
      {title ? ` "${title}"` : null}
      {")"}
    </Fragment>
  );
}
