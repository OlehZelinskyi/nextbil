import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../";
import { Props } from "../";

it("renders Dropdown component", () => {
  const props: Props = {
    value: "Gerald",
    options: ["Gerald", "Lybustok", "Yenefer"],
    setSelectedOption: jest.fn(),
  };
  const { getByTestId, getAllByTestId } = render(<Dropdown {...props} />);

  expect(getByTestId("dropdown-header")).toHaveTextContent(props.value);

  fireEvent.click(getByTestId("dropdown-header"));

  expect(getByTestId("dropdown-list")).toBeTruthy();
  expect(getAllByTestId("list-item")).toHaveLength(props.options.length);
});
