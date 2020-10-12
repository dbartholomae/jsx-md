/**
 * @packageDocumentation
 * @internal
 */
import { isMdAwaitElement } from "../util/isMdAwaitElement";
import { RenderFunction } from "./RenderFunction";

export const renderPromiseElement: RenderFunction = async (element, renderer) =>
  isMdAwaitElement(element)
    ? Promise.resolve(element.props.children).then(renderer)
    : null;
