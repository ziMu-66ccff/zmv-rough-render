export function mount(
  parentNode: HTMLElement | SVGElement,
  childNode: HTMLElement | SVGElement,
): void {
  parentNode?.appendChild(childNode)
}
