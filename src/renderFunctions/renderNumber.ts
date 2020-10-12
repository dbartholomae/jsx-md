/**
 * @packageDocumentation
 * @internal
 */
import { RenderFunction } from "./RenderFunction";

export const renderNumber: RenderFunction = async (element) =>
  typeof element === "number" ? Promise.resolve(element.toString()) : null;
