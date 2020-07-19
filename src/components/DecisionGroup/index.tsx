import React from "react";
import styled from "styled-components";

export interface Props {
  type: "radio" | "checkbox";
  options: (string | JSX.Element)[];
  vertical?: boolean;
}

const DecisionGroupWrapper = styled("div")<{ vertical: boolean | undefined }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  width: 100%;
  padding-bottom: 20px;
  font: 14px/17px Roboto;
`;

const DecisionWrapper = styled("span")<{ type: string }>`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover input ~ .checkmark {
    background-color: #eee;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
  ${({ type }) =>
    type === "checkbox"
      ? `.checkmark:after {
          left: 3px;
          top: 1px;
          width: 3px;
          height: 5px;
          border: solid #2196f3;
          border-width: 0 1px 1px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);`
      : `
      .checkmark:after {
        top: 2px;
        left: 2px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #2196f3;
      }
      `}
`;

const Input = styled("input")`
  position: absolute;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
`;

const Checkmark = styled("span")<{ type: string }>`
  position: absolute;
  top: 2px;
  left: 4px;
  height: 11px;
  width: 11px;
  background-color: #fff;
  border: 1px solid #2196f3;
  border-radius: ${({ type }) => (type === "checkbox" ? "3px" : "50%")};

  :after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Label = styled("label")`
  padding: 0 5px 0 25px;
`;

function DecisionGroup(props: Props) {
  const { type, options, vertical } = props;
  return (
    <DecisionGroupWrapper vertical={vertical}>
      {options.map((option: string | JSX.Element) => (
        <DecisionWrapper key={Math.random()} type={type}>
          <Input type={type} />
          <Checkmark className="checkmark" type={type} />
          <Label>{option}</Label>
        </DecisionWrapper>
      ))}
    </DecisionGroupWrapper>
  );
}

export default DecisionGroup;
