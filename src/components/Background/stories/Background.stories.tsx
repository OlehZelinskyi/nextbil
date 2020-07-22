import React from "react";
import { storiesOf } from "@storybook/react";
import Background from "..";
import { color } from "@storybook/addon-knobs";

storiesOf("Background", module).add("Background component", () => {
  const props = {
    color: color("Color", "#216456"),
  };

  return <Background {...props} />;
});
