import { line, rect, circle, path } from '../src/shape'
import { createContext } from '../src/context'
import { mount, createDiv } from './utils'

describe('shapes', () => {
  test('line', () => {
    const context = createContext(600, 400)
    const { node } = context
    line(context, {
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
    })
    mount(createDiv(), node)
  })

  test('circle', () => {
    const context = createContext(600, 400)
    const { node } = context
    circle(context, {
      cx: 100,
      cy: 100,
      r: 50,
      fill: 'red',
    })
    mount(createDiv(), node)
  })

  test('transparent circle', () => {
    const context = createContext(600, 400)
    const { node } = context
    circle(context, {
      cx: 100,
      cy: 100,
      r: 50,
      fill: 'transparent',
    })
    mount(createDiv(), node)
  })

  test('rect', () => {
    const context = createContext(600, 400)

    const { node } = context
    rect(context, {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
    })
    mount(createDiv(), node)
  })

  test('path', () => {
    const context = createContext(600, 400)
    const { node } = context
    const d = [['M', 10, 10], ['L', 100, 100], ['L', 100, 10], ['Z']]
    path(context, {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'red',
      d,
    })
    mount(createDiv(), node)
  })
})
