import { MarkdownChildren, MarkdownElement } from "./model";
import { renderNil } from "./renderFunctions/renderNil";
import { renderString } from "./renderFunctions/renderString";
import { renderNumber } from "./renderFunctions/renderNumber";
import { renderArray } from "./renderFunctions/renderArray";
import { renderFunctionElement } from "./renderFunctions/renderFunctionElement";
import { renderFragmentElement } from "./renderFunctions/renderFragmentElement";

/** @internal */
function renderNode(element: MarkdownChildren): string {
  const renderFunctions = [
    renderNil,
    renderString,
    renderNumber,
    renderArray,
    renderFunctionElement,
    renderFragmentElement,
  ];
  const results = renderFunctions
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
