import { Component, MarkdownNode, MdFragmentType } from "./model";

export function createElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownNode[]
): MarkdownNode | MarkdownNode[];
export function createElement(
  nodeType: string,
  attributes: null,
  ...children: MarkdownNode[]
): MarkdownNode | MarkdownNode[];
export function createElement(
  typeOrComponent: string | Component,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownNode[]
): MarkdownNode {
  if (typeOrComponent === MdFragmentType) {
    return {
      props: {
        children: children.flat(),
      },
      key: null,
      type: MdFragmentType,
    };
  }

  if (typeof typeOrComponent !== "function") {
    throw new TypeError(
      "No lower-case elements or class components supported, please make sure all your components start with an upper-case letter and are functions."
    );
  }

  return {
    type: typeOrComponent,
    props: {
      ...(attributes ?? {}),
      children: children.length <= 1 ? children[0] : children,
    },
    key: null,
  };
}
