/* @jsx MD */
import MD, { Fragment } from "..";

type Props = { children?: string; language?: string };

export function CodeBlock({ children, language }: Props) {
  return (
    <Fragment>
      ```{language}
      {"\n"}
      {children}
      {"\n"}```{"\n"}
    </Fragment>
  );
}
