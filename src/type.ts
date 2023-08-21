import type { RoughSVG } from 'roughjs/bin/svg'
import type { line, circle, rect, path } from './shape'

export interface RCSuperContext {
  node: SVGElement
  g: SVGElement
  rc: RoughSVG
}

export interface Renderer {
  line: typeof line
  circle: typeof circle
  rect: typeof rect
  path: typeof path
  node: () => SVGElement
  g: () => SVGElement
  rc: () => RoughSVG
}
