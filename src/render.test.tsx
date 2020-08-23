/* @jsx render */

import { render } from './render'
import { Text } from './elements'

describe('render', () => {
  it('renders a text node to its content', async () => {
    expect(<md-text>Content</md-text>).toEqual('Content')
  })

  it('renders a text component to its content', async () => {
    expect(<Text>Content</Text>).toEqual('Content')
  })

  it('renders a functional component to its content', async () => {
    function TestComponent () {
      return <Text>Content</Text>
    }

    expect(<TestComponent />).toEqual('Content')
  })
})
