/* @jsx MD */
import MD, { Fragment } from "..";

type Props = { children?: string; strong?: boolean };

export function Emphasis({ children, strong }: Props) {
  let marker = strong ? "**" : "_";
  return (
    <Fragment>
      {marker}
      {children}
      {marker}
    </Fragment>
  );
}
