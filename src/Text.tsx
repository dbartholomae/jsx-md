/* @jsx render */

import { render } from './render'

type Props = { children?: string | number }

export function Text ({ children }: Props) {
  return <md-text>{children}</md-text>
}
