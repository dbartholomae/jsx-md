/**
 * @packageDocumentation
 * @internal
 */
import { RenderFunction } from "./RenderFunction";

export const renderString: RenderFunction = async (element) =>
  typeof element === "string" ? Promise.resolve(element) : null;
