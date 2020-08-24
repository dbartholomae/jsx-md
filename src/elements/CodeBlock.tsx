/* @jsx render */

import { render } from '../render'

type Props = { children?: string }

export function CodeBlock ({ children }: Props) {
  return <md-text>```{children}```</md-text>
}
