/* @jsx MD */
import MD, { Text } from ".";
import { writeFileSync } from "fs";

function Readme() {
  return <Text>Readme</Text>;
}

writeFileSync("README.md", <Readme />);
pa;
