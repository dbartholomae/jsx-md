/* @jsx MD */
import MD from '..'

import { Emphasis } from '.'

describe('Emphasis', () => {
  it('returns the wrapped content', () => {
    expect(<Emphasis>Test</Emphasis>).toBe('_Test_')
  })

  it('strongly returns the wrapped content', () => {
    expect(<Emphasis strong>Test</Emphasis>).toBe('**Test**')
  })
})
