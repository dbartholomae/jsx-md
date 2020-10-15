/* @jsx MD */
import MD, { Component, MarkdownChildren } from "..";

/** @internal */
interface Props {
  children: Promise<MarkdownChildren>;
}

/**
 * Renders a single promise that resolves to a group of tags to markdown asynchronously.
 * Throws an error if multiple children is provided.
 * @example
 *   ```js
 *   render(<Await>{Promise.resolve("Hello")}</Await>)
 *   ===
 *   `Hello`
 *   ```
 */
export const Await: Component<Props> = ({ children }) => (
  <mdAwait>{children}</mdAwait>
);
