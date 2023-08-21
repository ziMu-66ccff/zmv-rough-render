export function mount(
  parentNode: HTMLElement | SVGElement,
  childNode: HTMLElement | SVGElement,
): void {
  parentNode?.appendChild(childNode)
}

export function createSVGElement(type: keyof SVGElementTagNameMap): SVGElement {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}
