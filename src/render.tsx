import { MarkdownChildren, MarkdownElement } from "./model";
import { renderFunctions } from "./renderFunctions";

/** @internal */
async function renderNode(element: MarkdownChildren): Promise<string> {
  const resolvedElement = await Promise.resolve(element);
  const promises = renderFunctions.map((renderFunction) =>
    renderFunction(resolvedElement, renderNode)
  );
  const results = (await Promise.all(promises)).filter(
    (result) => result !== null
  );
  if (results.length === 0) {
    throw new Error("Invalid element");
  }
  return results[0] as string;
}

/** Renders a markdown element into text. */
export async function render(element: MarkdownElement): Promise<string> {
  return renderNode(element);
}
