import rough from 'roughjs'
import { createSVGElement, mount } from './utils'
import type { RCSuperContext } from './type'

export function createContext(width: number, height: number): RCSuperContext {
  const svg = createSVGElement('svg')
  const g = createSVGElement('g')
  svg.setAttribute('width', width.toString())
  svg.setAttribute('height', height.toString())
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
  mount(svg, g)
  const rc = rough.svg(svg as SVGSVGElement)
  return { node: svg, g: g, rc: rc }
}
