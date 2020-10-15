/**
 * @packageDocumentation
 * @internal
 */
import { isMdFunctionElement } from "../util/isMdFunctionElement";
import { RenderFunction } from "./RenderFunction";

export const renderFunctionElement: RenderFunction = async (
  element,
  renderer
) =>
  isMdFunctionElement(element)
    ? Promise.resolve(renderer(element.type(element.props)))
    : null;
