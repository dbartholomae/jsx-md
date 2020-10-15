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
} from "./model";

import { Await } from ".";

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
  component: typeof Await,
  attributes: null,
  ...children: Promise<MarkdownNode[]>[]
): MarkdownNode | MarkdownNode[];
export function createElement(
  typeOrComponent: string | Component | typeof Await,
  attributes: Record<string, unknown> | null,
  ...children: MarkdownNode[] | Promise<MarkdownNode[]>[]
): MarkdownElement {
  if (typeOrComponent === MdFragmentType) {
    return createFragmentElement(children as MarkdownNode[]);
  }

  if (typeOrComponent === Await) {
    const promises = children.flat();
    // Throws error if is it not exactly one children.
    if (promises.length !== 1) {
      throw new TypeError(
        `<Await> expected to receive a single promise that resolves to any markdown children.`
      );
    }
    return createPromiseElement(promises[0] as Promise<MarkdownNode[]>);
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
  children: Promise<MarkdownNode[]>
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
