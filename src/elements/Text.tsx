import { Markdown } from "../model";

type Props = { children?: Markdown };

export function Text({ children }: Props): Markdown {
  return children;
}
