/* @jsx MD */
import MD from '..'

import { UnorderedList } from '.'

describe('UnorderedList', () => {
  it('wraps each child with a linebreak and a *', async () => {
    expect(<UnorderedList>
      {'a'}
      {'b'}
      {'c'}
    </UnorderedList>).toBe(`* a
* b
* c`)
  })
})
