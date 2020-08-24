/* @jsx MD */
import MD from '..'

type Props = { children?: string[] }

export function UnorderedList ({ children }: Props) {
  if (children === undefined) {
    return undefined
  }
  return <md-text>{children.map(child => `* ${child}`).join('\n')}</md-text>
}
