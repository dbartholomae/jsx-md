/* @jsx MD */
import MD, { Component, Fragment, MarkdownNode } from "..";

type Props = { children?: MarkdownNode; reference?: string };

export const ReferenceLink: Component<Props> = ({ children, reference }) => (
  <Fragment>
    {"["}
    {children}
    {"]"}
    {reference ? (
      <Fragment>
        {"["}
        {reference}
        {"]"}
      </Fragment>
    ) : null}
  </Fragment>
);
