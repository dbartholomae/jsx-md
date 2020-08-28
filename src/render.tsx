export function render(element: string | string[]): string {
  if (Array.isArray(element)) {
    return element.join("");
  }
  return element;
}
