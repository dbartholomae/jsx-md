/* @jsx MD */
import MD, { Component, Fragment, MarkdownNil, MarkdownText } from "..";

type MarkdownTextOrNil = MarkdownText | MarkdownNil;

type Props = { children?: MarkdownTextOrNil | MarkdownTextOrNil[] };

function escape(str?: MarkdownTextOrNil): string | undefined {
  if (str === null || str === undefined || str === false) {
    return undefined;
  }
  const charsToEscapeRegex = /[!.\-\+\\#\(\)\[\]\{\}_\*`]/;
  return str.toString().replace(charsToEscapeRegex, (match) => `\\${match}`);
}

export const Text: Component<Props> = ({ children }) => {
  if (Array.isArray(children)) {
    return <Fragment>{children.map(escape)}</Fragment>;
  }
  return <Fragment>{escape(children)}</Fragment>;
};
