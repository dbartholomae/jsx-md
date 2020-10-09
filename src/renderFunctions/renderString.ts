/**
 * @packageDocumentation
 * @internal
 */
import { RenderFunction } from "./RenderFunction";

export const renderString: RenderFunction = (element) =>
  typeof element === "string" ? element : null;
