import { TextNode } from "./dom";

export function render(element: TextNode | TextNode[]): string {
  if (Array.isArray(element)) {
    return element.map((el) => el.nodeValue).join("");
  }
  return element.nodeValue;
}
