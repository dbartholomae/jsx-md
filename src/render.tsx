import { MarkdownChildren, MarkdownElement, MdFragmentType } from "./model";

function renderNode(element: MarkdownChildren): string {
  if (element === null || element === undefined || element === false) {
    return "";
  }
  if (typeof element === "string") {
    return element;
  }
  if (typeof element === "number") {
    return element.toString();
  }
  if (Array.isArray(element)) {
    return element.map((el) => renderNode(el)).join("");
  }
  if (typeof element.type === "function") {
    return renderNode(element.type(element.props));
  }
  if (element.type === MdFragmentType) {
    return renderNode(element.props.children);
  }
  throw new Error("Invalid element");
}

export function render(element: MarkdownElement): string {
  return renderNode(element);
}
