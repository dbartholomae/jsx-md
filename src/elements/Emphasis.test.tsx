/* @jsx render */

import { render } from '../render'
import { Emphasis } from '.'

describe('Emphasis', () => {
  it('returns the wrapped content', () => {
    expect(<Emphasis>Test</Emphasis>).toEqual('_Test_')
  })

  it('strongly returns the wrapped content', () => {
    expect(<Emphasis strong>Test</Emphasis>).toEqual('**Test**')
  })
})