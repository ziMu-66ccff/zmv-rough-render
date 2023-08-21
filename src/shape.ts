import type { RCSuperContext } from './type'
import { mount } from './utils'

export function shape(
  context: RCSuperContext,
  name:
    | 'line'
    | 'rectangle'
    | 'ellipse'
    | 'circle'
    | 'linearPath'
    | 'polygon'
    | 'arc'
    | 'curve'
    | 'path',
  ...rest: any[]
): SVGElement {
  const { rc, g } = context
  const el = (rc as any)[name](...rest)
  mount(g, el)
  return el as SVGElement
}

export function line(context: RCSuperContext, attributes: Record<string, any>): SVGElement {
  const { x1, y1, x2, y2, ...options } = attributes
  return shape(context, 'line', Number(x1), Number(y1), Number(x2), Number(y2), options)
}

export function rect(context: RCSuperContext, attributes: Record<string, any>): SVGElement {
  const { width, height, x, y, ...options } = attributes
  const x1 = Number(width) > 0 ? Number(x) : Number(x) + Number(width)
  const y1 = Number(height) > 0 ? Number(y) : Number(y) + Number(height)
  return shape(
    context,
    'rectangle',
    x1,
    y1,
    Math.abs(Number(width)),
    Math.abs(Number(height)),
    options,
  )
}

export function path(context: RCSuperContext, attributes: Record<string, any>): SVGElement {
  const { d, ...options } = attributes
  const path = Array.isArray(d) ? d.flat().join(' ') : d
  return shape(context, 'path', path, options)
}

export function circle(context: RCSuperContext, attributes: Record<string, any>): SVGElement {
  const { cx, cy, r, fill, ...options } = attributes
  const roughFill = fill === 'transparent' ? undefined : fill
  return shape(context, 'circle', Number(cx), Number(cy), Number(r) * 2, {
    ...options,
    fill: roughFill,
  })
}
