/**
 * @packageDocumentation
 * @internal
 */
import { isMdFragmentElement } from "../util/isMdFragmentElement";
import { RenderFunction } from "./RenderFunction";

export const renderFragmentElement: RenderFunction = async (
  element,
  renderer
) =>
  isMdFragmentElement(element)
    ? Promise.resolve(renderer(element.props.children))
    : null;
