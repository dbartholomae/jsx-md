export type Markdown = string | number;
export type Props = {};
export type Component<ComponentProps extends Props = Props> = (
  props: ComponentProps
) => Markdown;
