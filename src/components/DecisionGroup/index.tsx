import React from "react";
import styled from "styled-components";

export interface Props {
  type: "radio" | "checkbox";
  options: string[];
  vertical?: boolean;
}

const DecisionGroupWrapper = styled("div")<{ vertical: boolean | undefined }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  width: 100%;
  font: 14px/17px Roboto;
  label {
    padding-right: 10px;
  }
`;

function DecisionGroup(props: Props) {
  const { type, options, vertical } = props;
  return (
    <DecisionGroupWrapper vertical={vertical}>
      {options.map((option) => (
        <span key={Math.random()}>
          <input type={type} />
          <label>{option}</label>
        </span>
      ))}
    </DecisionGroupWrapper>
  );
}

export default DecisionGroup;
