/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; reference: string };

export function ReferenceImage({
  children,
  reference,
}: Props): Markdown | Markdown[] {
  return (
    <Fragment>
      {"!["}
      {children}
      {"]"}
      {"["}
      {reference}
      {"]"}
    </Fragment>
  );
}
