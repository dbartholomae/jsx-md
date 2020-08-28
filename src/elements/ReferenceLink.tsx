/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; reference?: string };

export function ReferenceLink({
  children,
  reference,
}: Props): Markdown | Markdown[] {
  return (
    <Fragment>
      {"["}
      {children}
      {"]"}
      {reference ? (
        <Fragment>
          {"["}
          {reference}
          {"]"}
        </Fragment>
      ) : null}
    </Fragment>
  );
}
