/* @jsx MD */
import MD, { Fragment, Heading, LineBreak, Text } from "..";
import { writeFileSync } from "fs";
import pkg from "../package.json";

function Readme() {
  return (
    <Fragment>
      <Heading level={1}>{pkg.name}</Heading>
      <LineBreak />
      <Text>{pkg.description}</Text>
    </Fragment>
  );
}

writeFileSync("examples/README.md", <Readme />);
