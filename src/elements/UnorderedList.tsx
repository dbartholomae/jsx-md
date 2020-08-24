export function UnorderedList ({ children }: { children?: string[] }) {
  if (children === undefined) {
    return undefined
  }
  return children.map(child => `* ${child}`).join('\n')
}
