/* @jsx render */

import { Text } from '.'
import { render } from '../render'

describe('Text', () => {
  it('renders to the children', () => {
    expect(<Text>Test</Text>).toEqual('Test')
  })
})
