import { Markdown } from "../model";

type Props = { children?: Markdown | Markdown[] };

function escape(str?: string | number): string | undefined {
  const charsToEscapeRegex = /[!.\-\+\\#\(\)\[\]\{\}_\*`]/;
  return str?.toString()?.replace(charsToEscapeRegex, (match) => `\\${match}`);
}

export function Text({ children }: Props): Markdown | Markdown[] {
  if (Array.isArray(children)) {
    return children.map(escape);
  }
  return escape(children);
}
