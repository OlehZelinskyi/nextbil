import FormContainer from "./FormContainer";
import React from "react";
import { Heading, DecisionGroup, Button } from "..";
import IcoInput from "./Input";
import Dropdown from "../Dropdown";
import styles from "../../styles";
import StyledForm from "./StyledForm";
import { LetterSVG, LockSVG } from "./SVGImages";
import Link from "./Link";

const Form = (props: { [key: string]: any }) => {
  const { darkTextColor } = styles;
  const {
    onSubmit,
    onInputChange,
    onSelectOption,
    onRadioChange,
    onCheckboxChange,
    formData: { name, email, password, country, sex, agreements },
  } = props;
  return (
    <StyledForm onSubmit={onSubmit}>
      <Heading size={1} label={"Create a new account!"} color={darkTextColor} />
      <IcoInput
        placeholder={"Enter your name"}
        type={"text"}
        name={"name"}
        handleChange={onInputChange}
        value={name}
      />
      <IcoInput
        placeholder={"Email"}
        ico={<LetterSVG />}
        type={"email"}
        name={"email"}
        handleChange={onInputChange}
        value={email}
      />
      <IcoInput
        placeholder={"Password"}
        ico={<LockSVG />}
        type={"password"}
        name={"password"}
        handleChange={onInputChange}
        value={password}
      />
      <Dropdown value={country} setSelectedOption={onSelectOption} />
      <DecisionGroup
        vertical={false}
        type={"radio"}
        value={sex}
        options={["Male", "Female"]}
        handleRadioChange={onRadioChange}
      />
      <DecisionGroup
        vertical={true}
        type={"checkbox"}
        options={[
          <span>
            Accept <Link>terms</Link> and <Link>conditions</Link>
          </span>,
        ]}
        handleRadioChange={onCheckboxChange}
        value={agreements}
      />
      <Button type={"submit"} disabled={false}>
        Sign Up
      </Button>
    </StyledForm>
  );
};

export default FormContainer(Form);
