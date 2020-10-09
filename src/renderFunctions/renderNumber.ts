/**
 * @packageDocumentation
 * @internal
 */
import { RenderFunction } from "./RenderFunction";

export const renderNumber: RenderFunction = (element) =>
  typeof element === "number" ? element.toString() : null;
