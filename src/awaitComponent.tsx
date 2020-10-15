/* @jsx MD */
import MD, { Component, MdFunctionElement } from ".";

/**
 * Wraps a function that returns a promise to be a valid component
 * @example
 *   ```jsx
 *   const AsyncText = awaitComponent(async ({ children }) => (
 *     <Text>{children}</Text>
 *   ));
 *   render(<AsyncText>Test</AsyncText>))
 *   ===
 *   `Hello`
 *   ```
 */
export function awaitComponent<Props>(
  componentFn: (props: Props) => Promise<MdFunctionElement<Props>>
): Component<Props> {
  /* eslint-disable-next-line react/display-name */
  return (props: Props) => <mdAwait>{componentFn(props)}</mdAwait>;
}
