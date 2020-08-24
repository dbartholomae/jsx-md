/* @jsx render */

import { render } from '../render'
import { HorizontalRule } from '.'

describe('Horizontal Rule', () => {
  it('returns --- with empty lines', () => {
    expect(<HorizontalRule />).toBe('\n---\n')
  })
})
