/* @jsx MD */
import MD, { render } from '..'

import { UnorderedList } from '.'

describe('UnorderedList', () => {
  it('wraps each child with a linebreak and a *', async () => {
    expect(render(<UnorderedList>
      {'a'}
      {'b'}
      {'c'}
    </UnorderedList>)).toBe(`* a
* b
* c`)
  })
})
