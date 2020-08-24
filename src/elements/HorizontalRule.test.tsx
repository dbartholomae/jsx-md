/* @jsx MD */
import MD from '..'

import { HorizontalRule } from '.'

describe('Horizontal Rule', () => {
  it('returns --- with empty lines', () => {
    expect(<HorizontalRule />).toBe('\n---\n')
  })
})
