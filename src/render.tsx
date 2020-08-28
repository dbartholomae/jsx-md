import { Markdown } from "./model";

export function render(element: Markdown | Markdown[]): string {
  if (Array.isArray(element)) {
    return element.join("");
  }
  return element.toString();
}
