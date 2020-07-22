import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

// automatically import all files ending in *.stories.js
configure(
  require.context("../src/components", true, /.stories.(ts|tsx)$/),
  module
);

addDecorator(withKnobs);
