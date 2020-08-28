import { Markdown } from "../model";

type Props = { children?: Markdown | Markdown[] };

export function Fragment({ children }: Props) {
  if (Array.isArray(children)) {
    return children.join("");
  }
  return children;
}
