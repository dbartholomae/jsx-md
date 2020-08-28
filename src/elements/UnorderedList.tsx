/* @jsx MD */
import MD, { Fragment } from "..";

type Props = { children?: string[] };

export function UnorderedList({ children }: Props) {
  if (children === undefined) {
    return undefined;
  }
  return <Fragment>{children.map((child) => `* ${child}\n`)}</Fragment>;
}
