export const MdFragmentType = "md-fragment" as const;

interface FunctionElement<Props = unknown> {
  type: Component<Props>;
  props: Props;
  key: string | number | null;
}

interface MdFragmentElement {
  type: typeof MdFragmentType;
  props: PropsWithChildren;
  key: string | number | null;
}

export type MarkdownElement<Props = unknown> =
  | FunctionElement<Props>
  | MdFragmentElement;

export type MarkdownText = string | number;
export type MarkdownNil = false | null | undefined;
export type MarkdownNode = MarkdownNil | MarkdownText | MarkdownElement;
export type MarkdownChildren = MarkdownNode | MarkdownChildren[];
export type PropsWithChildren<
  AdditionalProps extends unknown = unknown
> = AdditionalProps & {
  children?: MarkdownChildren;
};
export type Component<ComponentProps extends unknown = unknown> = (
  props: ComponentProps
) => MarkdownElement | null;
