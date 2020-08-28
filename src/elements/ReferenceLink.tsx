/* @jsx MD */
import MD, { Component, Fragment, Markdown } from "..";

type Props = { children?: Markdown | Markdown[]; reference?: string };

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
