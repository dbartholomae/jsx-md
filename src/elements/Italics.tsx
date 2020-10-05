/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/**
 * @example
 *   ```js
 *   render(<Italics>Test</Italics>)
 *   ===
 *   '_Test_'
 *   ```
 */
export const Italics: Component<PropsWithChildren> = ({ children }) => (
  <Fragment>
    {"_"}
    {children}
    {"_"}
  </Fragment>
);
