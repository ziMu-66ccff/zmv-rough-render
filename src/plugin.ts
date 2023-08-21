import { createContext } from './context'
import type { Renderer } from './type'
import { line, circle, rect, path } from './shape'

export function createPlugin(width: number, height: number): Renderer {
  const context = createContext(width, height)
  return {
    line,
    circle,
    rect,
    path,
    node: () => context.node,
    g: () => context.g,
    rc: () => context.rc,
  }
}
