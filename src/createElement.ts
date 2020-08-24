type Props = {
  [key: string]: any
}

export function createElement(functionalComponent: (props: Props) => string, attributes: null): string
export function createElement (nodeType: string, attributes: null, children: string): string
export function createElement (typeOrComponent: string | ((props: Props) => string), attributes: null, ...children: string[]): string {
  if (typeof typeOrComponent === 'function') {
    return typeOrComponent({ ...(attributes ?? {}), children })
  }
  return children.join('')
}
