/* @jsx MD */
import MD, { Fragment } from "..";

type Props = { children?: string[] };

export function OrderedList({ children }: Props) {
  if (children === undefined) {
    return undefined;
  }
  return (
    <Fragment>
      {children.map((child, index) => `${index + 1}. ${child}\n`)}
    </Fragment>
  );
}
