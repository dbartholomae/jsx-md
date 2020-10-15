import { MarkdownChildren } from "./model";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mdFragment: {
        children?: MarkdownChildren;
      };
      mdAwait: {
        children?: Promise<MarkdownChildren>;
      };
    }
  }
}
