/* @jsx MD */
import MD from '..'

import { Heading } from '.'

describe('Heading', () => {
  it('renders a level 1 heading correctly', () => {
    expect(<Heading level={1}>Test</Heading>).toBe('# Test')
  })

  it('renders a level 2 heading correctly', () => {
    expect(<Heading level={2}>Test</Heading>).toBe('## Test')
  })

  it('renders a level 3 heading correctly', () => {
    expect(<Heading level={3}>Test</Heading>).toBe('### Test')
  })
})
