/**
 * @packageDocumentation
 * @internal
 */
import { isMdFunctionElement } from "../util/isMdFunctionElement";
import { RenderFunction } from "./RenderFunction";

export const renderFunctionElement: RenderFunction = (element, renderer) =>
  isMdFunctionElement(element) ? renderer(element.type(element.props)) : null;
