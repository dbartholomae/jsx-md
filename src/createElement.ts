import { Component, Markdown } from "./model";

export function createElement(
  component: Component,
  attributes: {} | null,
  ...children: Markdown[]
): Markdown | Markdown[];
export function createElement(
  nodeType: string,
  attributes: null,
  ...children: Markdown[]
): Markdown | Markdown[];
export function createElement(
  typeOrComponent: string | Component,
  attributes: {} | null,
  ...children: Markdown[]
): Markdown | Markdown[] {
  if (typeof typeOrComponent !== "function") {
    throw new TypeError(
      "No lower-case elements or class components supported, please make sure all your components start with an upper-case letter and are functions."
    );
  }
  return typeOrComponent({
    ...(attributes ?? {}),
    children: children.length <= 1 ? children[0] : children,
  });
}
