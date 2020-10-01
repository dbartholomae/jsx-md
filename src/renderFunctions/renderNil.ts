import { RenderFunction } from "./RenderFunction";
import { isMarkdownNil } from "../util/isMarkdownNil";

export const renderNil: RenderFunction = (element) =>
  isMarkdownNil(element) ? "" : null;
