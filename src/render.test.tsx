import { render } from './render'

describe('render', () => {
  it('returns an empty string for an empty array', () => {
    expect(render([])).toEqual('')
  })
})
