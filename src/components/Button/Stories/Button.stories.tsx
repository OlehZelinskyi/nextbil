import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "..";
import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Button", module).add("Button component", () => {
  const props = {
    disabled: boolean("Disabled", false),
  };
  const label = text("Label", "Sign In");
  return <Button {...props}>{label}</Button>;
});
