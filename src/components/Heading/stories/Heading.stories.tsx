import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "..";
import { color, text, number } from "@storybook/addon-knobs";

storiesOf("Heading", module).add("Heading component", () => {
  const props = {
    color: color("Color", "#216456"),
    label: text("Label", "Welcome..."),
    size: number("Size", 28),
  };

  return (
    <Heading color={props.color} size={props.size}>
      {props.label}
    </Heading>
  );
});
