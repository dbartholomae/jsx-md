/* @jsx render */

import { render } from './render'

describe('render', () => {
  it('renders a text node to its content', () => {
    expect(<md-text>Content</md-text>).toBe('Content')
  })

  it('renders a nested component to its content', () => {
    function Text ({ children }: { children?: string }) {
      return children
    }
    expect(<Text>Content</Text>).toBe('Content')
  })

  it('renders a functional component to its content', () => {
    function Text ({ children }: { children?: string }) {
      return children
    }
    function TestComponent () {
      return <Text>Content</Text>
    }

    expect(<TestComponent />).toBe('Content')
  })

  it('renders a text node with multiple children to its content', () => {
    expect(<md-text>{'More'} {'Content'}</md-text>).toBe('More Content')
  })

  it('renders a functional component with an attribute', () => {
    function Component({ attribute }: { attribute: string }) {
      return <md-text>{attribute}</md-text>
    }
    expect(<Component attribute='Test' />).toEqual('Test')
  })
})
