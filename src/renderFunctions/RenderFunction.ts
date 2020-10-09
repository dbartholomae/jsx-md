/**
 * @packageDocumentation
 * @internal
 */

import { MarkdownChildren } from "../model";

export interface RenderFunction {
  (
    element: MarkdownChildren,
    renderer: (el: MarkdownChildren) => string | null
  ): string | null;
}
