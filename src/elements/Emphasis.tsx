/* @jsx render */

import { render } from '../render'

export function Emphasis({ children }: { children?: string }) {
  return <md-text>*{children}*</md-text>
}
