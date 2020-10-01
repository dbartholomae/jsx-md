import { MarkdownChildren, MarkdownNil } from "../model";

export function isMarkdownNil(
  element: MarkdownChildren
): element is MarkdownNil {
  return element === null || element === undefined || element === false;
}
