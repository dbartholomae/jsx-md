export type Markdown = string | number | undefined;
export type Props = Record<string, unknown>;
export type Component<ComponentProps extends Props = Props> = (
  props: ComponentProps
) => Markdown | Markdown[];
