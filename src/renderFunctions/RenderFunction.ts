import { MarkdownChildren } from "../model";

/**
 * @packageDocumentation
 * @internal
 */
export interface RenderFunction {
  (
    element: MarkdownChildren,
    renderer: (el: MarkdownChildren) => string | null
  ): string | null;
}
