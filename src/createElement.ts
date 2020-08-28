import { Component, Markdown } from "./model";

export function createElement(
  component: Component,
  attributes: {} | null,
  ...children: Markdown[]
): Markdown;
export function createElement(
  nodeType: string,
  attributes: null,
  ...children: Markdown[]
): Markdown;
export function createElement(
  typeOrComponent: string | Component,
  attributes: {} | null,
  ...children: Markdown[]
): Markdown {
  if (typeof typeOrComponent === "function") {
    return typeOrComponent({
      ...(attributes ?? {}),
      children: children.length === 1 ? children[0] : children,
    });
  }
  return children.join("");
}
