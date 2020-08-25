/* @jsx MD */
import MD, { render } from '..'

import { UnorderedList } from '.'

describe('UnorderedList', () => {
  it('wraps each child with a linebreak and a *', () => {
    expect(render(<UnorderedList>
      {'a'}
      {'b'}
      {'c'}
    </UnorderedList>)).toBe(`* a
* b
* c
`)
  })

  it('wraps nested components', () => {
    function Component ({children}: {children?: string}) {
      return children
    }
    expect(render(<UnorderedList>
      <Component>a</Component>
      <Component>b</Component>
      <Component>c</Component>
    </UnorderedList>)).toBe(`* a
* b
* c
`)
  })
})
