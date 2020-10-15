/**
 * @packageDocumentation
 * @internal
 */
import { RenderFunction } from "./RenderFunction";

export const renderArray: RenderFunction = async (element, renderer) =>
  Array.isArray(element)
    ? Promise.all(element.map((el) => renderer(el)))
        .then((results) => results.filter((el) => el !== null))
        .then((results) => results.join(""))
    : null;
