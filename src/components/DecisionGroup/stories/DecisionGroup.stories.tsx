import React from "react";
import { storiesOf } from "@storybook/react";
import DecisionGroup from "../";
import { radios, array, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("DecisionGroup", module).add("DecisionGroup component", () => {
  const props = {
    type: radios(
      "Type",
      {
        Radio: "radio",
        Checkbox: "checkbox",
      },
      "radio"
    ),
    options: array("Options", ["Rivia", "Temeria", "Nilfgard"]),
    vertical: boolean("Vertical", true),
    error: text("Error", "Please select country..."),
    handleRadioChange: action("Select"),
    value: "Rivia",
  };

  return <DecisionGroup {...props} />;
});
