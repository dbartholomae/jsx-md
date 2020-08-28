export type Markdown = string | number | undefined;
export type Props = {};
export type Component<ComponentProps extends Props = Props> = (
  props: ComponentProps
) => Markdown | Markdown[];
