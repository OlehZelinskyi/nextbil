import React from "react";
import Error from "../Error";
import DecisionGroupWrapper from "./DecisionGroupWrapper";
import DecisionWrapper from "./DecisionWrapper";
import Input from "./Input";
import Label from "./Label";
import Checkmark from "./Checkmark";

export interface Props {
  type: "radio" | "checkbox";
  options: (string | JSX.Element)[];
  vertical?: boolean;
  error?: string;
  handleRadioChange: () => void;
  value: any;
}

function DecisionGroup(props: Props) {
  const { type, options, vertical, error, handleRadioChange, value } = props;
  const isChecked = (option: any) =>
    typeof value == "boolean" ? value : option === value;
  return (
    <DecisionGroupWrapper vertical={vertical}>
      {options.map((option: string | JSX.Element) => (
        <DecisionWrapper key={Math.random()} type={type}>
          <Input
            type={type}
            checked={isChecked(option)}
            value={type === "checkbox" ? value : (option as string)}
            onChange={handleRadioChange}
          />
          <Checkmark className="checkmark" type={type} />
          <Label>{option}</Label>
        </DecisionWrapper>
      ))}
      {error && <Error>{error}</Error>}
    </DecisionGroupWrapper>
  );
}

export default DecisionGroup;
