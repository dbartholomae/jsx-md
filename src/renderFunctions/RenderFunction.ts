/**
 * @packageDocumentation
 * @internal
 */

import { MarkdownChildren } from "../model";

export interface RenderFunction {
  (
    element: MarkdownChildren,
    renderer: (el: MarkdownChildren) => Promise<string | null>
  ): Promise<string | null>;
}
