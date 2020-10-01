import { MarkdownChildren, MarkdownElement } from "./model";
import { synchronousRenderFunctions } from "./renderFunctions";

/** @internal */
function renderNode(element: MarkdownChildren): string {
  const results = synchronousRenderFunctions
    .map((renderFunction) => renderFunction(element, renderNode))
    .filter((result) => result !== null) as string[];
  if (results.length === 0) {
    throw new Error("Invalid element");
  }
  return results[0];
}

/** Renders a markdown element into text. */
export function render(element: MarkdownElement): string {
  return renderNode(element);
}
