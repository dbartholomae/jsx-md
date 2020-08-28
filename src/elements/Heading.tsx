/* @jsx MD */
import MD, { Fragment } from "..";

type Props = {
  children?: string | string[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Heading({ children, level }: Props) {
  return (
    <Fragment>
      {"#".repeat(level)} {children}
      {"\n\n"}
    </Fragment>
  );
}
