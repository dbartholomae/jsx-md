interface MdNode {
  parentNode: DOMElement | null;
}

export type ElementNames =
  | 'md-root'
  | 'md-text';

export type DOMNodeAttribute = boolean | string | number;

export type TextNode = {
  nodeName: 'md-text';
  nodeValue: string;
} & MdNode

export type DOMElement = {
  nodeName: ElementNames;
  attributes: {
    [key: string]: DOMNodeAttribute;
  };
  childNodes: DOMElement[];
  parentNode: DOMElement | null;
} & MdNode;

export type DOMNode<T = {nodeName: ElementNames}> = T extends {
    nodeName: infer U;
  }
  ? U extends 'md-text'
    ? TextNode
    : DOMElement
  : never;
