/* @jsx render */

import { render } from '../render'
import { CodeBlock } from '.'

describe('CodeBlock', () => {
  it('returns the wrapped content', () => {
    expect(<CodeBlock>Test</CodeBlock>).toEqual('```Test```')
  })
})
