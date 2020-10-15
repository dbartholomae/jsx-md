import { MdAwaitElement, MdAwaitType } from "../model";

export function isMdAwaitElement(
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  element: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
  /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
): element is MdAwaitElement {
  return element && element.type === MdAwaitType && element.props;
}
