/* @jsx MD */
import MD, { render } from '..'

import { Text } from '.'

describe('Text', () => {
  it('renders to the children', () => {
    expect(render(<Text>Test</Text>)).toBe('Test')
  })
})
