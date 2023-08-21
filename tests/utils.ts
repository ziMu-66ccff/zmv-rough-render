export function createDiv(): HTMLElement {
  const div = document.createElement('div')
  document.body.appendChild(div)
  return div
}

export function mount(
  parentNode: HTMLElement | SVGElement,
  childNode: HTMLElement | SVGElement,
): void {
  parentNode?.appendChild(childNode)
}
