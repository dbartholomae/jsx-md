export type ElementNames =
  | 'md-raws'
  | 'md-text';

export type TextNode = {
  nodeName: ElementNames;
  nodeValue: string;
}

export type DOMElement = TextNode | TextNode[]
