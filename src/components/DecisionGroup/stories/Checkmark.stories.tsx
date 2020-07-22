import React from "react";
import { storiesOf } from "@storybook/react";
import Checkmark from "../Checkmark";
import { radios } from "@storybook/addon-knobs";

storiesOf("DecisionGroup", module).add("Checkmark component", () => {
  const label = "Type";
  const options = {
    Radio: "radio",
    Checkbox: "checkbox",
  };
  const defaultValue = "radio";

  const props = {
    type: radios(label, options, defaultValue),
  };

  return <Checkmark {...props} />;
});
