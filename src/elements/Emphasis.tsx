/* @jsx render */

import { render } from '../render'

type Type = { children?: string, strong?: boolean }

export function Emphasis({ children, strong }: Type) {
  let marker = strong ? '**' : '_'
  return <md-text>{marker}{children}{marker}</md-text>
}