/**
 * @packageDocumentation
 * @internal
 */
import {
  Component,
  MarkdownElement,
  MarkdownNode,
  MdFragmentType,
  MdAwaitType,
  MarkdownChildren,
} from "./model";

export function createElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownChildren[]
): MarkdownElement;
export function createElement(
  nodeType: typeof MdFragmentType,
  attributes: null,
  ...children: MarkdownChildren[]
): MarkdownElement;
export function createElement(
  nodeType: typeof MdAwaitType,
  attributes: null,
  children: Promise<MarkdownChildren>
): MarkdownElement;
export function createElement(
  typeOrComponent: string | Component,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownChildren[] | Promise<MarkdownChildren>[]
): MarkdownElement {
  if (typeOrComponent === MdFragmentType) {
    return createFragmentElement(children as MarkdownNode[]);
  }

  if (typeOrComponent === MdAwaitType) {
    // Throws error if is it not exactly one children.
    if (children.length !== 1) {
      throw new TypeError(
        `Received ${children.length} promises, expected a single promise.`
      );
    }
    return createPromiseElement(children[0] as Promise<MarkdownChildren>);
  }

  if (typeof typeOrComponent === "function") {
    return createComponentElement(
      typeOrComponent as Component,
      attributes,
      children as MarkdownNode[]
    );
  }

  throw new TypeError(
    `Unsupported lower-case element '${typeOrComponent}' encountered, please make sure all your components start with an upper-case letter and are functions.`
  );
}

function createFragmentElement(children: MarkdownNode[]): MarkdownElement {
  return {
    type: MdFragmentType,
    props: {
      children: children.flat(),
    },
    key: null,
  };
}

function createPromiseElement(
  children: Promise<MarkdownChildren>
): MarkdownElement {
  return {
    type: MdAwaitType,
    props: { children },
    key: null,
  };
}

function createComponentElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  children: MarkdownNode[]
): MarkdownElement {
  return {
    type: component,
    props: {
      ...(attributes ?? {}),
      children: children.length <= 1 ? children[0] : children,
    },
    key: null,
  };
}
