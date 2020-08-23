/* @jsx render */

import { render } from '../render'
import { Heading } from '.'

describe('Heading', () => {
  it('renders a level 1 heading correctly', () => {
    expect(<Heading level={1}>Test</Heading>).toEqual('# Test')
  })

  it('renders a level 2 heading correctly', () => {
    expect(<Heading level={2}>Test</Heading>).toEqual('## Test')
  })

  it('renders a level 3 heading correctly', () => {
    expect(<Heading level={3}>Test</Heading>).toEqual('### Test')
  })
})
