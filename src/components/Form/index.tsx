import React from "react";

// Components
import Form from "./Form";

import IcoInput from "./Input";
import Heading from "../Heading";

import styles from "../../styles";
import DecisionGroup from "../DecisionGroup";

function SignUp() {
  const { darkTextColor } = styles;

  return (
    <Form>
      <Heading size={1} label={"Create a new account!"} color={darkTextColor} />
      <IcoInput placeholder={"Enter your name"} />
      <DecisionGroup
        vertical={false}
        type={"radio"}
        options={["Male", "Female"]}
      />
    </Form>
  );
}

export default SignUp;
