import { ElementNames, TextNode } from './dom'

type Props = {
  [key: string]: any
}

function renderElement (element: TextNode | string): string {
  if (typeof element === 'string') {
    return element
  }
  return element.nodeValue
}

function createTextNode (content: string | string [], nodeName: ElementNames): TextNode {
  const nodeValue = Array.isArray(content) ? content.flat().map(renderElement).join('') : content
  return {
    nodeName,
    nodeValue
  }
}

export function createElement(functionalComponent: (props: Props) => TextNode | string, attributes: null): TextNode
export function createElement (nodeType: string, attributes: null, children: string): TextNode
export function createElement (typeOrComponent: string | ((props: Props) => TextNode | string), attributes: null, ...children: string[]): TextNode {
  if (typeof typeOrComponent === 'function') {
    const componentResult = typeOrComponent({ ...(attributes ?? {}), children })
    if (typeof componentResult === 'string') {
      return createTextNode(componentResult, 'md-text')
    }
    return componentResult
  }
  return createTextNode(children, 'md-text')
}
