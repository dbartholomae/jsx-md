/* @jsx MD */
import MD, { Component, Fragment, PropsWithChildren } from "..";

/** @internal */
interface Props {
  checked?: boolean;
}

/**
 * @example
 *   ```js
 *   render(<Task checked>Test</Task>)
 *   ===
 *   '- [x] Test'
 */
export const Task: Component<PropsWithChildren<Props>> = ({
  checked,
  children,
}) => (
  <Fragment>
    {"-"} {"["}
    {checked ? "x" : " "}
    {"]"} {children}
    {"\n"}
  </Fragment>
);
