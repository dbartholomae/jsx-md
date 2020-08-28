/* @jsx MD */
import MD, { Fragment, Markdown } from "..";

type Props = {
  children?: Markdown | Markdown[];
  label: string;
  title?: string;
};

export function Reference({
  children,
  label,
  title,
}: Props): Markdown | Markdown[] {
  return (
    <Fragment>
      {"\n["}
      {label}
      {"]: "}
      {children}
      {title ? ` "${title}"` : null}
      {"\n"}
    </Fragment>
  );
}
