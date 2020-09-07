/* @jsx MD */
import MD, { Component, PropsWithChildren } from "..";

export const Fragment: Component<PropsWithChildren> = ({ children }) => (
  <mdFragment>{children}</mdFragment>
);
