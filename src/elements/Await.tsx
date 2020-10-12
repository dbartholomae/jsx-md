/* @jsx MD */
import MD, { Component, PropsWithChildren } from "..";
import { MarkdownChildren } from "../model";

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
export const Await: Component<PropsWithChildren<
  unknown,
  Promise<MarkdownChildren>
>> = ({ children }) => <mdAwait>{children}</mdAwait>;
