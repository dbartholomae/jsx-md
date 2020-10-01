/**
 * @packageDocumentation
 * @internal
 */
import { isMdFragmentElement } from "../util/isMdFragmentElement";
import { RenderFunction } from "./RenderFunction";

export const renderFragmentElement: RenderFunction = (element, renderer) =>
  isMdFragmentElement(element) ? renderer(element.props.children) : null;
