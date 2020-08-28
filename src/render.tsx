import { Markdown } from "./model";

export function render(element: Markdown | Markdown[]): string {
  if (Array.isArray(element)) {
    return element.join("");
  }
  if (element == null) {
    return "";
  }
  return element.toString();
}
