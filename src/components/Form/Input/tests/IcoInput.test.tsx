import React from "react";
import { render } from "@testing-library/react";
import IcoInput from "../";
import { Props } from "../";

it("render IcoInput component", () => {
  const props: Props = {
    placeholder: "Rivia",
    type: "text",
    name: "city",
    handleChange: jest.fn(),
    value: "",
    ico: <span></span>,
  };

  const { getByPlaceholderText, getByTestId } = render(<IcoInput {...props} />);

  expect(getByPlaceholderText(props.placeholder)).toBeTruthy();
  expect(getByTestId("ico-input")).toBeTruthy();
  expect(getByPlaceholderText(props.placeholder)).toHaveAttribute(
    "type",
    props.type
  );
});
