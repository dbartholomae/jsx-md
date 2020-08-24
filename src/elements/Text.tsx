/* @jsx MD */
import MD from '..'

type Props = { children?: string | number }

export function Text ({ children }: Props) {
  return <md-text>{children}</md-text>
}
