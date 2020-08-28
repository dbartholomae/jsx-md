import { Component, Markdown } from "..";

type Props = { children?: Markdown | Markdown[] };

function escape(str?: string | number): string | undefined {
  const charsToEscapeRegex = /[!.\-\+\\#\(\)\[\]\{\}_\*`]/;
  return str?.toString()?.replace(charsToEscapeRegex, (match) => `\\${match}`);
}

export const Text: Component<Props> = ({ children }) => {
  if (Array.isArray(children)) {
    return children.map(escape);
  }
  return escape(children);
};
