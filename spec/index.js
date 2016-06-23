import { default as expect } from 'expect'
import { getScreenSize } from '..'

const breakpoints = {
  small: 420,
  medium: 768,
  large: 1024
}

describe('getScreenSize', () => {
  it('works', () => {
    expect(getScreenSize(300, breakpoints)).toEqual('small')
    expect(getScreenSize(700, breakpoints)).toEqual('medium')
    expect(getScreenSize(1000, breakpoints)).toEqual('large')
    expect(getScreenSize(1200, breakpoints)).toEqual('xlarge')
  })
})
