import React from "react";

// Components
import Form from "./Form";

import IcoInput from "./Input";
import Heading from "../Heading";

import styles from "../../styles";

function SignUp() {
  const { darkTextColor } = styles;

  return (
    <Form>
      <Heading size={1} label={"Create a new account!"} color={darkTextColor} />
      <IcoInput placeholder={"Enter your name"} />
    </Form>
  );
}

export default SignUp;
