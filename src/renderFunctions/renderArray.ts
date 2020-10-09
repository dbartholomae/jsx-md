/**
 * @packageDocumentation
 * @internal
 */
import { RenderFunction } from "./RenderFunction";

export const renderArray: RenderFunction = (element, renderer) =>
  Array.isArray(element)
    ? element
        .map((el) => renderer(el))
        .filter((el) => el !== null)
        .join("")
    : null;
