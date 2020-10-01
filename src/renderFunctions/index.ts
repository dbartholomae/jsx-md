import { renderNil } from "./renderNil";
import { renderString } from "./renderString";
import { renderNumber } from "./renderNumber";
import { renderArray } from "./renderArray";
import { renderFunctionElement } from "./renderFunctionElement";
import { renderFragmentElement } from "./renderFragmentElement";
import { RenderFunction } from "./RenderFunction";

export const synchronousRenderFunctions: RenderFunction[] = [
  renderNil,
  renderString,
  renderNumber,
  renderArray,
  renderFunctionElement,
  renderFragmentElement,
];
