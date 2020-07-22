import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "../";
import { array, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Dropdown", module).add("Dropdown component", () => {
  const props = {
    error: text("Error", "Select your hero..."),
    setSelectedOption: action("select"),
    value: text("Value", ""),
    options: array("options", [
      "Gerald",
      "Lybustok",
      "Cirilla",
      "Yeneffer",
      "Triss",
    ]),
  };

  return <Dropdown {...props} />;
});
