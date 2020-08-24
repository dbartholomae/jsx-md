/* @jsx MD */
import MD from '..'

import { CodeBlock } from '.'

describe('CodeBlock', () => {
  it('returns the wrapped content', () => {
    expect(<CodeBlock>Test</CodeBlock>).toBe('```Test```')
  })
})
