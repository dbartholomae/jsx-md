/* @jsx MD */
import MD, { Component, Fragment } from "..";

type Props = { children?: string[] };

export const UnorderedList: Component<Props> = ({ children }) => {
  if (children === undefined) {
    return undefined;
  }
  return <Fragment>{children.map((child) => `* ${child}\n`)}</Fragment>;
};
