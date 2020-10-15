import { renderNil } from "./renderNil";
import { renderString } from "./renderString";
import { renderNumber } from "./renderNumber";
import { renderArray } from "./renderArray";
import { renderFunctionElement } from "./renderFunctionElement";
import { renderPromiseElement } from "./renderPromiseElement";
import { renderFragmentElement } from "./renderFragmentElement";
import { RenderFunction } from "./RenderFunction";

export const renderFunctions: RenderFunction[] = [
  renderNil,
  renderString,
  renderNumber,
  renderArray,
  renderFunctionElement,
  renderFragmentElement,
  renderPromiseElement,
];
