import { RenderFunction } from "./RenderFunction";
import { isMarkdownNil } from "../util/isMarkdownNil";

export const renderNil: RenderFunction = async (element) =>
  isMarkdownNil(element) ? Promise.resolve("") : null;
