import { MdFragmentElement, MdFragmentType } from "../model";

export function isMdFragmentElement(
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  element: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
  /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
): element is MdFragmentElement {
  return element && element.type === MdFragmentType && element.props;
}
