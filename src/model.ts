/** @internal */
export const MdFragmentType = "mdFragment" as const;

/** @internal */
export const MdAwaitType = "mdAwait" as const;

/** @internal */
interface MdElement<Type, Props = unknown> {
  type: Type;
  props: Props;
  key: string | null;
}

/** @internal */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type MdFunctionElement<Props = any> = MdElement<Component<Props>, Props>;

/** @internal */
export type MdFragmentElement = MdElement<
  typeof MdFragmentType,
  PropsWithChildren
>;

/** @internal */
export type MdAwaitElement = MdElement<
  typeof MdAwaitType,
  { children: Promise<MarkdownChildren> }
>;

/** Internal representation of markdown before rendering. */
export type MarkdownElement<Props = unknown> =
  | MdFunctionElement<Props>
  | MdFragmentElement
  | MdAwaitElement;

/** Primitive text types that get converted into text. */
export type MarkdownText = string | number;

/** Nil types that get ignored. */
export type MarkdownNil = false | null | undefined;

/** Any primitive Markdown type. */
export type MarkdownNode = MarkdownNil | MarkdownText | MarkdownElement;

/** Nested Markdown type. */
export type MarkdownChildren = MarkdownNode | MarkdownChildren[];

/** Helper type for creating Elements that accept other markdown as children. */
export type PropsWithChildren<
  AdditionalProps = unknown
> = AdditionalProps & {
  children?: MarkdownChildren;
};

/** A functional component that creates Markdown elements. */
export type Component<ComponentProps = unknown> = (
  props: ComponentProps
) => MarkdownElement | null;

/** @internal */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
declare global {
  /* eslint-disable-next-line @typescript-eslint/no-namespace */
  namespace JSX {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    interface IntrinsicElements {
      mdFragment: {
        children?: MarkdownChildren;
      };
      mdAwait: {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        children?: Promise<MarkdownElement<any> | null>;
      };
    }
  }
}
