/* @jsx MD */
import MD from '..'

import { Text } from '.'

describe('Text', () => {
  it('renders to the children', () => {
    expect(<Text>Test</Text>).toBe('Test')
  })
})
