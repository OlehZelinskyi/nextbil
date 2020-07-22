import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "../";
import { text, radios, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Form", module).add("Form component", () => {
  const errors = {
    name: true,
    email: true,
    password: true,
    country: "Please select the country",
    sex: true,
    agreements: true,
  };

  const props = {
    onSubmit: action("submit"),
    onInputChange: action("inputChange"),
    onSelectOption: action("selectOption"),
    onRadioChange: action("radioChange"),
    onCheckboxChange: action("checkboxChange"),
    showError: (error: true | string) => {
      return error === true ? "" : error;
    },
    formData: {
      name: text("Name", "Gerald"),
      email: text("Email", "kaerMorhen@castt.le"),
      password: text("Password", "Wild Hunt"),
      sex: radios("Sex", { Male: "Male", Female: "Female" }, "Male"),
      agreements: boolean("Agreements", true),
      errors: errors,
      submitting: boolean("Submitting", false),
    },
  };

  return <Form {...props} />;
});
