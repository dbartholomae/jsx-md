type Props = {
  [key: string]: any
}

export function render(functionalComponent: (props: Props) => string, attributes: null): string
export function render (nodeType: string, attributes: null, children: string): string
export function render (typeOrComponent: string | ((props: Props) => string), attributes: null, ...children: string[]): string {
  if (typeof typeOrComponent === 'function') {
    return typeOrComponent({ ...(attributes ?? {}), children: children.join('') })
  }
  return children.join('')
}
