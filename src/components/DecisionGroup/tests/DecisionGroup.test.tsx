import React from "react";
import { render } from "@testing-library/react";
import DecisionGroup from "../";
import { Props } from "../";

it("renders options provided ", () => {
  const props: Props = {
    type: "radio",
    options: ["Male", "Female"],
    handleRadioChange: jest.fn(),
    value: "",
    error: "Some custom error",
  };

  const { getByText, queryByText, queryByTestId } = render(
    <DecisionGroup {...props} />
  );

  expect(getByText("Male")).toBeInTheDocument();
  expect(getByText("Female")).toBeInTheDocument();

  expect(queryByText("Male")).toBeEnabled();
  expect(queryByText("Female")).toBeEnabled();

  expect(queryByTestId("Male")).toHaveAttribute("type", "radio");
  expect(queryByTestId("Female")).toHaveAttribute("type", "radio");

  expect(getByText("Some custom error")).toBeInTheDocument();
});
