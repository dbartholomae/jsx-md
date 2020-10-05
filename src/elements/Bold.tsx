/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/**
 * @example
 *   ```js
 *   render(<Bold>Test</Bold>)
 *   ===
 *   '**Test**'
 *   ```
 */
export const Bold: Component<PropsWithChildren> = ({ children }) => (
  <Fragment>
    {"**"}
    {children}
    {"**"}
  </Fragment>
);
