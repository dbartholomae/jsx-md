import { TextNode } from './dom'

type Props = {
  [key: string]: any
}

export function createElement(functionalComponent: (props: Props) => TextNode, attributes: null): TextNode
export function createElement (nodeType: string, attributes: null, children: string): TextNode
export function createElement (typeOrComponent: string | ((props: Props) => TextNode), attributes: null, ...children: string[]): TextNode {
  if (typeof typeOrComponent === 'function') {
    return typeOrComponent({ ...(attributes ?? {}), children })
  }
  return {
    nodeName: 'md-text',
    nodeValue: children.join('')
  }
}
