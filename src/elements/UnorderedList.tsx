type Props = { children?: string[] };

export function UnorderedList({ children }: Props) {
  if (children === undefined) {
    return undefined;
  }
  return children.map((child) => `* ${child}\n`);
}
