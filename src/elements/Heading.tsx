/* @jsx MD */
import MD, { Fragment } from "..";

type Props = {
  children?: string | string[];
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export function Heading({ children, level }: Props) {
  return (
    <Fragment>
      {"#".repeat(level)} {children}
    </Fragment>
  );
}
