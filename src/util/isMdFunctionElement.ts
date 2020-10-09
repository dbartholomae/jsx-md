import { MdFunctionElement } from "../model";

export function isMdFunctionElement(
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  element: any
  /* eslint-enable @typescript-eslint/no-explicit-any */
  /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
): element is MdFunctionElement {
  return element && typeof element.type === "function" && element.props;
}
