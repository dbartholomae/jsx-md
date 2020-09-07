/* @jsx MD */
import MD, { Component, Fragment } from "..";

interface Props {
  children: string;
  language?: string;
}

export const CodeBlock: Component<Props> = ({ children, language }) => (
  <Fragment>
    ```{language}
    {"\n"}
    {children}
    {"\n"}```{"\n"}
  </Fragment>
);
