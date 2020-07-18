import React from "react";

// Components
import Form from "./Form";

import IcoInput from "./Input";
import Heading from "../Heading";

import styles from "../../styles";
import DecisionGroup from "../DecisionGroup";
import Button from "../Button";
import Dropdown from "../Dropdown";

const LockSVG = () => (
  <img src={`${process.env.PUBLIC_URL}/lock.svg`} alt={"lock-icon"} />
);

const LetterSVG = () => (
  <img src={`${process.env.PUBLIC_URL}/letter.svg`} alt={"letter-icon"} />
);

function SignUp() {
  const { darkTextColor } = styles;

  return (
    <Form>
      <Heading size={1} label={"Create a new account!"} color={darkTextColor} />
      <IcoInput placeholder={"Enter your name"} />
      <IcoInput placeholder={"Email"} ico={<LetterSVG />} />
      <IcoInput placeholder={"Password"} ico={<LockSVG />} />
      <Dropdown />
      <DecisionGroup
        vertical={false}
        type={"radio"}
        options={["Male", "Female"]}
      />
      <DecisionGroup
        vertical={true}
        type={"checkbox"}
        options={["Accept terms and conditions"]}
      />
      <Button type={"submit"} disabled={false}>
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUp;
